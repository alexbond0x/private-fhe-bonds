# Private FHE Bonds

A decentralized bond trading platform built with Fully Homomorphic Encryption (FHE) technology, enabling private and secure bond transactions while maintaining regulatory compliance.

## Features

- **FHE-Encrypted Trading**: All sensitive data is encrypted using Fully Homomorphic Encryption
- **Wallet Integration**: Seamless connection with popular Web3 wallets via RainbowKit
- **Private Bond Markets**: Trade bonds with complete privacy protection
- **Regulatory Compliance**: Selective disclosure capabilities for authorized regulators
- **Real-time Analytics**: Advanced market analytics and portfolio tracking

## Technologies

This project is built with:

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHEVM (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE capabilities

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/alexbond0x/private-fhe-bonds.git

# Navigate to the project directory
cd private-fhe-bonds

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Configuration

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

## Smart Contracts

The platform includes FHE-enabled smart contracts for:

- **PrivateFHEBonds.sol**: Main contract for bond creation, investment, and redemption
- **FHE Encryption**: All sensitive data (amounts, rates, identities) are encrypted
- **Regulatory Compliance**: Selective disclosure mechanisms for authorized access

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to your preferred hosting platform
npm run preview
```

## Security

- All sensitive data is encrypted using FHE technology
- Smart contracts implement zero-knowledge proofs
- Wallet integration uses industry-standard security practices
- Regular security audits and updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
