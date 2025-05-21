# ERC-20 Token Implementation for Solana with NeonEVM

## Overview

This project demonstrates how to create and deploy an ERC-20 compatible token on the Solana blockchain using the Neon EVM thanks to NeonEVM Bootcamp. The implementation here aims to bridge the gap between Ethereum's ERC-20 standard and Solana's SPL token system, allowing developers to leverage Solana's high performance while maintaining compatibility with Ethereum's token standard.

## Prerequisites

- Node.js (v16 or higher)
- A Solana wallet with SOL for deployment
- A Metamask wallet with NEON for Deployment
- Basic understanding of Solana and Ethereum development

## Project Structure

```
├── contracts/NeonEVMContracts           # Smart contract files
├── scripts/            # Deployment and interaction scripts
├── test/              # Test files
└── README.md          # Project documentation
```

## Features

- ERC-20 standard compliance
- Cross-chain compatibility


## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Harshkumar62367/ERC-20-for-SPL_Token.git
cd ERC-20-for-SPL_Token
```

2. Install dependencies:

```bash
npm install
```

### Configuration

1. Set up your Metamask wallet with NEON tokens
2. Configure your environment variables
3. Update the deployment parameters as needed, as shown in `.env.example` file.

### Deployment

```bash
npx hardhat run scripts/Bootcamp.js --network neondevnet
```

## Key Components of Project

1. **ERC-20-for-SPL Mintable Token Contracts**: ERC 20-for-SPL mintable contracts along with compossability and precompile contracts in contracts folder. 
2. **Bootcamp script**: Script to deploy a simple ERC-20-for-SPL token.

## Deployment Results

Below are the key contract addresses and transactions from the successful deployment:

### Token Contract

- **NeonEVM_MYTOKEN Address**: [`0xeD7A943708a5ee4482Ae8fEa4A04f1c11De09d74`](https://neon-devnet.blockscout.com/address/0xeD7A943708a5ee4482Ae8fEa4A04f1c11De09d74)
- **Token Mint**: 0x4cf9d92182bfe10eecfbbeba6806046d3468d2005ea6c9693a7a2656c37320a9
- **Metamask Neon Address**: [`0xd12A585952dea511B17299D10B5059Cbd75fE64A`](https://neon-devnet.blockscout.com/address/0xd12A585952dea511B17299D10B5059Cbd75fE64A)
