async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const TipContract = await ethers.getContractFactory("TipContract");
  const tipContract = await TipContract.deploy();
  console.log("TipContract deployed to:", tipContract.address);

  const WalletContract = await ethers.getContractFactory("WalletContract");
  const walletContract = await WalletContract.deploy();
  console.log("WalletContract deployed to:", walletContract.address);

  const ProfileContract = await ethers.getContractFactory("ProfileContract");
  const profileContract = await ProfileContract.deploy();
  console.log("ProfileContract deployed to:", profileContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
