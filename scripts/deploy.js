const hre = require("hardhat")

async function main() {
  const [deployer] = await hre.ethers.getSigners()
  console.log("Deploying contracts with the account:", deployer.address)

  // Deploy ERC20PaymentSplitter
  const ERC20PaymentSplitter = await hre.ethers.getContractFactory("ERC20PaymentSplitter")
  const splitter = await ERC20PaymentSplitter.deploy(deployer.address)
  await splitter.waitForDeployment()

  console.log("ERC20PaymentSplitter deployed to:", splitter.target)

  // For testing purposes, deploy a mock ERC20 token
  const MockERC20 = await hre.ethers.getContractFactory("MockERC20")
  const mockToken = await MockERC20.deploy("Mock Token", "MTK", deployer.address)
  await mockToken.waitForDeployment()

  console.log("MockERC20 deployed to:", mockToken.target)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
