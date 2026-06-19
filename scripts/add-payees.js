const hre = require("hardhat")

async function main() {
  const [deployer] = await hre.ethers.getSigners()
  console.log("Adding payees with the account:", deployer.address)

  // Get the deployed ERC20PaymentSplitter contract address
  const splitterAddress = process.env.SPLITTER_ADDRESS
  if (!splitterAddress) {
    throw new Error("Please set SPLITTER_ADDRESS environment variable")
  }

  const ERC20PaymentSplitter = await hre.ethers.getContractFactory("ERC20PaymentSplitter")
  const splitter = ERC20PaymentSplitter.attach(splitterAddress)

  // Add payees with their shares
  // Example: 3 payees with 50%, 30%, and 20% shares
  const payees = [
    { address: "0xPayee1Address", shares: 50 },
    { address: "0xPayee2Address", shares: 30 },
    { address: "0xPayee3Address", shares: 20 },
  ]

  console.log("Adding payees...")
  for (const payee of payees) {
    console.log(`Adding ${payee.address} with ${payee.shares} shares`)
    const tx = await splitter.addPayee(payee.address, payee.shares)
    await tx.wait()
  }

  console.log("All payees added successfully!")

  // Verify total shares
  const totalShares = await splitter.totalShares()
  console.log(`Total shares: ${totalShares}`)

  // List all payees
  const payeesList = await splitter.getPayees()
  console.log("Payees list:", payeesList)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
