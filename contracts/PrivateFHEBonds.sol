// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract PrivateFHEBonds is SepoliaConfig {
    using FHE for *;
    
    struct Bond {
        euint32 bondId;
        euint32 principalAmount;
        euint32 interestRate;
        euint32 maturityPeriod;
        euint32 currentValue;
        euint32 totalInvestors;
        bool isActive;
        bool isRedeemed;
        string name;
        string description;
        address issuer;
        uint256 issueDate;
        uint256 maturityDate;
    }
    
    struct Investment {
        euint32 investmentId;
        euint32 amount;
        euint32 expectedReturn;
        address investor;
        uint256 timestamp;
    }
    
    struct BondPerformance {
        euint32 totalInvested;
        euint32 totalReturns;
        euint32 activeInvestors;
        bool isPerforming;
    }
    
    mapping(uint256 => Bond) public bonds;
    mapping(uint256 => Investment) public investments;
    mapping(uint256 => BondPerformance) public bondPerformance;
    mapping(address => euint32) public investorReputation;
    mapping(address => euint32) public issuerReputation;
    
    uint256 public bondCounter;
    uint256 public investmentCounter;
    
    address public owner;
    address public verifier;
    
    event BondCreated(uint256 indexed bondId, address indexed issuer, string name);
    event InvestmentMade(uint256 indexed investmentId, uint256 indexed bondId, address indexed investor, uint32 amount);
    event BondRedeemed(uint256 indexed bondId, address indexed issuer);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createBond(
        string memory _name,
        string memory _description,
        uint256 _principalAmount,
        uint256 _interestRate,
        uint256 _maturityPeriod
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Bond name cannot be empty");
        require(_principalAmount > 0, "Principal amount must be positive");
        require(_interestRate > 0, "Interest rate must be positive");
        require(_maturityPeriod > 0, "Maturity period must be positive");
        
        uint256 bondId = bondCounter++;
        uint256 issueDate = block.timestamp;
        uint256 maturityDate = issueDate + _maturityPeriod;
        
        bonds[bondId] = Bond({
            bondId: FHE.asEuint32(0),
            principalAmount: FHE.asEuint32(0), // Will be set via FHE operations
            interestRate: FHE.asEuint32(0), // Will be set via FHE operations
            maturityPeriod: FHE.asEuint32(0), // Will be set via FHE operations
            currentValue: FHE.asEuint32(0),
            totalInvestors: FHE.asEuint32(0),
            isActive: true,
            isRedeemed: false,
            name: _name,
            description: _description,
            issuer: msg.sender,
            issueDate: issueDate,
            maturityDate: maturityDate
        });
        
        bondPerformance[bondId] = BondPerformance({
            totalInvested: FHE.asEuint32(0),
            totalReturns: FHE.asEuint32(0),
            activeInvestors: FHE.asEuint32(0),
            isPerforming: true
        });
        
        emit BondCreated(bondId, msg.sender, _name);
        return bondId;
    }
    
    function investInBond(
        uint256 bondId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public payable returns (uint256) {
        require(bonds[bondId].issuer != address(0), "Bond does not exist");
        require(bonds[bondId].isActive, "Bond is not active");
        require(!bonds[bondId].isRedeemed, "Bond has been redeemed");
        require(block.timestamp <= bonds[bondId].maturityDate, "Bond has matured");
        
        uint256 investmentId = investmentCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        
        // Calculate expected return based on interest rate
        euint32 interestRate = bonds[bondId].interestRate;
        euint32 expectedReturn = FHE.mul(internalAmount, FHE.add(FHE.asEuint32(100), interestRate)) / FHE.asEuint32(100);
        
        investments[investmentId] = Investment({
            investmentId: FHE.asEuint32(0),
            amount: internalAmount,
            expectedReturn: expectedReturn,
            investor: msg.sender,
            timestamp: block.timestamp
        });
        
        // Update bond totals
        bonds[bondId].currentValue = FHE.add(bonds[bondId].currentValue, internalAmount);
        bonds[bondId].totalInvestors = FHE.add(bonds[bondId].totalInvestors, FHE.asEuint32(1));
        
        // Update bond performance
        bondPerformance[bondId].totalInvested = FHE.add(bondPerformance[bondId].totalInvested, internalAmount);
        bondPerformance[bondId].activeInvestors = FHE.add(bondPerformance[bondId].activeInvestors, FHE.asEuint32(1));
        
        emit InvestmentMade(investmentId, bondId, msg.sender, 0); // Amount will be decrypted off-chain
        return investmentId;
    }
    
    function redeemBond(uint256 bondId) public {
        require(bonds[bondId].issuer == msg.sender, "Only bond issuer can redeem");
        require(bonds[bondId].isActive, "Bond is not active");
        require(!bonds[bondId].isRedeemed, "Bond already redeemed");
        require(block.timestamp >= bonds[bondId].maturityDate, "Bond has not matured yet");
        
        bonds[bondId].isRedeemed = true;
        bonds[bondId].isActive = false;
        
        // Calculate total returns for investors
        euint32 totalReturns = FHE.mul(bonds[bondId].currentValue, FHE.add(FHE.asEuint32(100), bonds[bondId].interestRate)) / FHE.asEuint32(100);
        bondPerformance[bondId].totalReturns = totalReturns;
        
        emit BondRedeemed(bondId, msg.sender);
    }
    
    function updateReputation(address user, uint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        investorReputation[user] = FHE.asEuint32(reputation);
        emit ReputationUpdated(user, reputation);
    }
    
    function getBondInfo(uint256 bondId) public view returns (
        string memory name,
        string memory description,
        address issuer,
        uint256 issueDate,
        uint256 maturityDate,
        bool isActive,
        bool isRedeemed
    ) {
        Bond storage bond = bonds[bondId];
        return (
            bond.name,
            bond.description,
            bond.issuer,
            bond.issueDate,
            bond.maturityDate,
            bond.isActive,
            bond.isRedeemed
        );
    }
    
    function getInvestmentInfo(uint256 investmentId) public view returns (
        address investor,
        uint256 timestamp
    ) {
        Investment storage investment = investments[investmentId];
        return (
            investment.investor,
            investment.timestamp
        );
    }
}
