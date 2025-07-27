# 🏦 Simple Bank - Foundry UI

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![Wagmi](https://img.shields.io/badge/Wagmi-2.16.0-green)](https://wagmi.sh/)
[![RainbowKit](https://img.shields.io/badge/RainbowKit-2.2.8-blue)](https://www.rainbowkit.com/)

A modern, responsive web application for interacting with the Simple Bank smart contract on Ethereum. This frontend provides an intuitive interface for depositing, withdrawing, and managing your digital assets through blockchain technology.

## 🌟 Features

- 💰 **Deposit ETH** - Securely deposit Ethereum into the smart contract
- 🏧 **Withdraw Funds** - Withdraw your deposited funds anytime
- 📊 **Balance Tracking** - Real-time balance updates
- 🔗 **Wallet Integration** - Connect with popular Ethereum wallets
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Real-time Updates** - Live blockchain data synchronization

## 🛠️ Tech Stack

### Frontend

- **⚛️ [Next.js 15](https://nextjs.org)** - React framework with App Router
- **🎨 [Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **📦 [TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **🧩 [Radix UI](https://www.radix-ui.com/)** - Accessible UI components
- **🎯 [Lucide React](https://lucide.dev/)** - Beautiful icons

### Web3 Integration

- **🌈 [RainbowKit](https://www.rainbowkit.com/)** - Best-in-class wallet connection
- **⚡ [Wagmi](https://wagmi.sh/)** - React hooks for Ethereum
- **🔄 [TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **📡 [Viem](https://viem.sh/)** - TypeScript interface for Ethereum

### Backend & Database

- **🗄️ [Drizzle ORM](https://orm.drizzle.team)** - TypeScript ORM
- **🐘 [PostgreSQL](https://www.postgresql.org/)** - Relational database

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm/yarn
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kavinda-100/simple-bank-foundry-ui.git
   cd simple-bank-foundry-ui
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your environment variables:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/simplebank"
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID="your_wallet_connect_project_id"
   ```

4. **Set up the database**

   ```bash
   # Start the database (if using the provided script)
   ./start-database.sh
   
   # Generate and run migrations
   bun run db:push
   ```

5. **Start the development server**

   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with Turbo |
| `bun run build` | Build the application for production |
| `bun run start` | Start the production server |
| `bun run lint` | Run ESLint |
| `bun run lint:fix` | Fix ESLint errors automatically |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run format:check` | Check code formatting |
| `bun run format:write` | Format code with Prettier |
| `bun run db:push` | Push database schema changes |
| `bun run db:studio` | Open Drizzle Studio |

## 🔗 Smart Contract

This frontend interacts with the Simple Bank smart contract built with Foundry.

**Smart Contract Repository:** [Simple-Bank-Foundry](https://github.com/kavinda-100/Simple-Bank--Foundry-)

### Key Features

- ✅ Secure deposit and withdrawal functionality
- ✅ Owner-based access control
- ✅ Event emission for frontend synchronization
- ✅ Gas-optimized operations

## 🌐 Supported Networks

- **Ethereum Mainnet** 🔗
- **Sepolia Testnet** 🧪 (Recommended for testing)
- **Anvil Local Network** ⚙️

## 📱 Usage

1. **Connect Your Wallet**
   - Click the "Connect Wallet" button
   - Choose from multiple wallet options (MetaMask, WalletConnect, etc.)

2. **Deposit Funds**
   - Enter the amount of ETH you want to deposit
   - Confirm the transaction in your wallet

3. **Check Balance**
   - Your current balance is displayed on the dashboard
   - Updates in real-time after transactions

4. **Withdraw Funds**
   - Click "Withdraw" and enter the amount
   - Confirm the transaction to receive your funds

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by [Kavinda](https://github.com/kavinda-100)**

⭐ Star this repo if you find it helpful!
