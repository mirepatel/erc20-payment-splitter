const hre = require("hardhat")

async function main() {
  const [deployer] = await hre.ethers.getSigners()
  console.log("Distributing tokens with the account:", deployer.address)

  // Get the deployed contract addresses
  const splitterAddress = process.env.SPLITTER_ADDRESS
  const tokenAddress = process.env.TOKEN_ADDRESS

  if (!splitterAddress || !tokenAddress) {
    throw new Error("Please set SPLITTER_ADDRESS and TOKEN_ADDRESS environment variables")
  }

  // Get contract instances
  const ERC20PaymentSplitter = await hre.ethers.getContractFactory("ERC20PaymentSplitter")
  const splitter = ERC20PaymentSplitter.attach(splitterAddress)

  const MockERC20 = await hre.ethers.getContractFactory("MockERC20")
  const token = MockERC20.attach(tokenAddress)

  // Amount to distribute
  const amount = hre.ethers.parseEther("100")

  // Check token balance
  const balance = await token.balanceOf(deployer.address)
  console.log(`Token balance: ${hre.ethers.formatEther(balance)} MTK`)

  if (balance < amount) {
    throw new Error("Insufficient token balance")
  }

  // Approve splitter to spend tokens
  console.log(`Approving ${hre.ethers.formatEther(amount)} tokens for splitter...`)
  const approveTx = await token.approve(splitterAddress, amount)
  await approveTx.wait()
  console.log("Approval successful")

  // Deposit and distribute tokens
  console.log(`Depositing and distributing ${hre.ethers.formatEther(amount)} tokens...`)
  const distributeTx = await splitter.depositAndDistribute(tokenAddress, amount)
  await distributeTx.wait()
  console.log("Distribution successful!")

  // Get payees
  const payees = await splitter.getPayees()

  // Check balances of all payees
  console.log("\nPayee balances after distribution:")
  for (let i = 0; i < payees.length; i++) {
    const payeeAddress = payees[i]
    const shares = await splitter.shares(payeeAddress)
    const payeeBalance = await token.balanceOf(payeeAddress)
    console.log(`Payee ${i + 1} (${payeeAddress}):`)
    console.log(`  Shares: ${shares}`)
    console.log(`  Balance: ${hre.ethers.formatEther(payeeBalance)} MTK`)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
