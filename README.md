# 🌿 ERC20 Payment Splitter

### Design × Development

.˚⊹₊⟡⋆

An Ethereum-based decentralized utility application designed for automated, immutable, and proportional ERC20 token distribution among multiple pre-allocated recipients. Built using strict type constraints and modular smart contract structures to bypass third-party financial intermediaries securely.

---

## ✦ About

This repository represents a decentralized revenue-sharing architecture engineered to process ecosystem splits, automated royalties, or joint venture stake claims. Utilizing a secure, pull-based withdrawal system, the platform ensures total transactional auditability and deterministic payment tracking directly on the ledger.

The design emphasizes high gas efficiency, strict adherence to established Solidity code styles, and rigorous local environment unit testing to eliminate security and transaction processing vulnerabilities prior to network deployment.

₊⊹

---

## ✦ Features

🌱 **Proportional Token Allocation** • Algorithmic distribution of incoming ERC20 token payloads calculated securely against predefined payee share weights.  
🌱 **Pull-Based Claims Logic** • Secure accounting models letting individual payees trigger automated withdrawals independently without affecting co-payee balances.  
🌱 **Automated Operations Suite** • Custom utility integration scripts to cleanly handle localized smart contract deployment, payee addition, and token allocations.  
🌱 **Strict Code Compliance** • Engineering parameters written precisely with underscored function arguments, clear camelCase qualifiers, and systematic file positioning.  
🌱 **Automated Integrity Tests** • Comprehensive unit testing workflows covering system deployment constraints, payee registration edge cases, and post-transaction balances.  

₊⊹

---

## ✦ Tech

![Solidity](https://img.shields.io/badge/Solidity-0f172a?style=flat&logo=solidity&logoColor=white&labelColor=0f172a) •
![Ethereum](https://img.shields.io/badge/Ethereum-0f172a?style=flat&logo=ethereum&logoColor=white&labelColor=0f172a) •
![Hardhat](https://img.shields.io/badge/Hardhat-0f172a?style=flat&logo=hardhat&logoColor=white&labelColor=0f172a) •
![JavaScript](https://img.shields.io/badge/JavaScript-0f172a?style=flat&logo=javascript&logoColor=white&labelColor=0f172a)

₊⊹

---

## ✦ Architecture

```text
erc20-payment-splitter/
├── package.json
├── hardhat.config.js         # Local Hardhat blockchain network configuration
├── README.md
├── LICENSE
├── contracts/                # Core immutable smart contract assets
│   ├── ERC20PaymentSplitter.sol # Core revenue distribution state machine
│   └── MockERC20.sol         # Mintable test token asset simulation
├── scripts/                  # Automated operational utility parameters
│   ├── deploy.js             # Contract compilation deployment script
│   ├── add-payees.js         # Batch address allocation engine
│   └── distribute-tokens.js  # Automated token distribution handler
└── test/                     # Hardhat local runtime testing suite
    └── ERC20PaymentSplitter.test.js # Behavioral assertion lifecycle checks

```

₊⊹

---

## ✦ Operations

To compile smart contracts and run the automated verification test framework locally, execute the following commands inside your development terminal:

```bash
# Ingest local node dependency layers
npm install

# Compile Solidity smart contracts
npx hardhat compile

# Run the automated unit testing suite
npx hardhat test
```
₊⊹

---

## ✦ Academic Verification

* **Institution** • Middlesex University London (Dept. of Computer Science)
* **Module Core** • Blockchain Development (CST4125 Coursework)
* **Academic Peer Collaboration** • Developed jointly alongside Deepak Kumar

₊⊹

---

## ✦ Connect

[LinkedIn](https://www.linkedin.com/in/mirepatel) • [Portfolio](https://mirepatel.framer.website/) • [Email](mailto:mirepatel@gmail.com)

---

**C**ode

**C**reativity

**C**ontinuous Learning

•··
