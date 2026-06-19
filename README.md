# ERC20 Payment Splitter 🪙

An Ethereum-based decentralized application (DApp) designed for automated, immutable, and proportional ERC20 token distribution among multiple pre-defined recipients. This system completely bypasses traditional financial intermediaries by encoding exact share distributions directly into the smart contract logic.

## 🚀 Overview & Architecture

The system utilizes a clean, modular smart contract architecture optimized for trust, transparency, and gas efficiency:
* **`ERC20PaymentSplitter.sol`**: Manages the proportional allocation of incoming ERC20 token deposits using a pull-based payment lifecycle, keeping track of total shares, individual payouts, and historical records.
* **`MockERC20.sol`**: An extension of the OpenZeppelin ERC20 standard utilized for testing and simulating real-world ERC20 asset transactions.

## 🛠️ Tech Stack & Tools

* **Smart Contracts:** Solidity (^0.8.20), OpenZeppelin Contracts
* **Development Environment:** Hardhat
* **Testing & Library Support:** Ethers.js, Chai, Mocha
* **Modeling standards:** UML Class Diagrams & Use Case Diagrams

## 💻 Code Style Guidelines Implemented

Following industry standard practices for smart contract readability and security, the codebase adheres strictly to the following parameters:
* **Function Parameters:** Prefixed with an underscore in camelCase (`_parameterName`).
* **Constants:** Fully capitalized with snake_case word separation (`CONSTANT_NAME`).
* **State Variables & Methods:** Clear, descriptive camelCase names (`balanceOf`, `totalShares`).
* **Strict Ordering:** Structured systematically from SPDX Identifiers and Pragma definitions down through State Variables, Events, and Modifiers to Methods.

## 🧪 Unit Testing Framework

The comprehensive test suite in `test/ERC20PaymentSplitter.test.js` exercises the smart contract lifecycle through extensive Hardhat and Ethers.js scenarios. Tests utilize standard lifecycle hooks (`before`, `beforeEach`) and assert the robustness of contract state handling:
* **Deployment Validation:** Assures explicit owner initialization and verifies initial zero state for total shares.
* **Payee Management:** Validates state logic when managing and initializing contract payees.
* **Asset Lifecycle:** Tests successful token transactions, checking pre-balances, post-balances, and auditing block properties.
* **Error & Security Handling:** Validates explicit operational parameters via `require`, `revert`, and `assert` logic.

## 🏃‍♂️ How to Run Locally

1. Clone the repository and navigate to the project directory.
2. Install the necessary development dependencies:
   ```bash
   npm install
   ```
3. Compile the Solidity smart contracts:
   ```bash
   npx hardhat compile
   ```
4. Execute the unit test suite:
   ```bash
   npx hardhat test
   ```
   