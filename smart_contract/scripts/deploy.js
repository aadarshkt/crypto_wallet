const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await Transactions.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address:", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
