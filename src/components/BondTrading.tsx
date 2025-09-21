import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FHEUtils } from '@/lib/fhe-utils';

interface BondTradingProps {
  contractAddress: string;
}

export default function BondTrading({ contractAddress }: BondTradingProps) {
  const { address } = useAccount();
  const [bondName, setBondName] = useState('');
  const [bondDescription, setBondDescription] = useState('');
  const [principalAmount, setPrincipalAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [maturityPeriod, setMaturityPeriod] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { writeContract, data: hash, error, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleCreateBond = async () => {
    if (!address || !bondName || !principalAmount || !interestRate || !maturityPeriod) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    try {
      // Encrypt sensitive data using FHE
      const encryptedAmount = await FHEUtils.encryptAmount(
        parseFloat(principalAmount),
        contractAddress,
        address
      );

      const encryptedRate = await FHEUtils.encryptAmount(
        parseFloat(interestRate),
        contractAddress,
        address
      );

      const encryptedPeriod = await FHEUtils.encryptAmount(
        parseFloat(maturityPeriod),
        contractAddress,
        address
      );

      // Call smart contract with encrypted data
      await writeContract({
        address: contractAddress as `0x${string}`,
        abi: [
          {
            "inputs": [
              {"name": "_name", "type": "string"},
              {"name": "_description", "type": "string"},
              {"name": "_principalAmount", "type": "bytes"},
              {"name": "_interestRate", "type": "bytes"},
              {"name": "_maturityPeriod", "type": "bytes"},
              {"name": "_inputProof", "type": "bytes"}
            ],
            "name": "createBond",
            "outputs": [{"name": "", "type": "uint256"}],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        functionName: 'createBond',
        args: [
          bondName,
          bondDescription,
          encryptedAmount.encryptedData,
          encryptedRate.encryptedData,
          encryptedPeriod.encryptedData,
          encryptedAmount.inputProof
        ],
      });
    } catch (error) {
      console.error('Error creating bond:', error);
      alert('Failed to create bond. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInvestInBond = async (bondId: number, amount: string) => {
    if (!address) {
      alert('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      // Encrypt investment amount
      const encryptedAmount = await FHEUtils.encryptAmount(
        parseFloat(amount),
        contractAddress,
        address
      );

      // Call smart contract with encrypted investment
      await writeContract({
        address: contractAddress as `0x${string}`,
        abi: [
          {
            "inputs": [
              {"name": "bondId", "type": "uint256"},
              {"name": "amount", "type": "bytes"},
              {"name": "inputProof", "type": "bytes"}
            ],
            "name": "investInBond",
            "outputs": [{"name": "", "type": "uint256"}],
            "stateMutability": "payable",
            "type": "function"
          }
        ],
        functionName: 'investInBond',
        args: [
          bondId,
          encryptedAmount.encryptedData,
          encryptedAmount.inputProof
        ],
        value: BigInt(parseFloat(amount) * 1e18), // Convert to wei
      });
    } catch (error) {
      console.error('Error investing in bond:', error);
      alert('Failed to invest in bond. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Bond</CardTitle>
          <CardDescription>
            Create a new bond with encrypted sensitive data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="bondName">Bond Name</Label>
            <Input
              id="bondName"
              value={bondName}
              onChange={(e) => setBondName(e.target.value)}
              placeholder="Enter bond name"
            />
          </div>
          <div>
            <Label htmlFor="bondDescription">Description</Label>
            <Input
              id="bondDescription"
              value={bondDescription}
              onChange={(e) => setBondDescription(e.target.value)}
              placeholder="Enter bond description"
            />
          </div>
          <div>
            <Label htmlFor="principalAmount">Principal Amount (USD)</Label>
            <Input
              id="principalAmount"
              type="number"
              value={principalAmount}
              onChange={(e) => setPrincipalAmount(e.target.value)}
              placeholder="Enter principal amount"
            />
          </div>
          <div>
            <Label htmlFor="interestRate">Interest Rate (%)</Label>
            <Input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter interest rate"
            />
          </div>
          <div>
            <Label htmlFor="maturityPeriod">Maturity Period (days)</Label>
            <Input
              id="maturityPeriod"
              type="number"
              value={maturityPeriod}
              onChange={(e) => setMaturityPeriod(e.target.value)}
              placeholder="Enter maturity period"
            />
          </div>
          <Button 
            onClick={handleCreateBond}
            disabled={isPending || isConfirming || isLoading}
            className="w-full"
          >
            {isPending || isConfirming ? 'Processing...' : 'Create Bond'}
          </Button>
        </CardContent>
      </Card>

      {hash && (
        <Card>
          <CardHeader>
            <CardTitle>Transaction Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Transaction Hash: {hash}
            </p>
            {isConfirming && (
              <p className="text-blue-600">Waiting for confirmation...</p>
            )}
            {isSuccess && (
              <p className="text-green-600">Transaction confirmed!</p>
            )}
            {error && (
              <p className="text-red-600">Error: {error.message}</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
