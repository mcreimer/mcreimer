const main = async () => {

  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

  const gameContract = await gameContractFactory.deploy(
    ["Statham", "TheRock", "Bruce"],       // Names
    ["https://maxblizz.com/wp-content/uploads/2021/09/jason-e1632847452574.jpg", // Images
    "https://jornalfatos.com.br/wp-content/uploads/infocoweb/2019/10/31/thumbnail-for-42786.jpg", 
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/10/bruce-lee.jpg"],
    [100, 200, 12],                    // HP values
    [50, 100, 250],                       // Attack damage values
    "Godfather", // Boss name
    "https://3.bp.blogspot.com/-C0ln3HbXgNo/Wn5WOXtd0BI/AAAAAAAAGbU/mKcLBeM6Hkko9hqpnX6y-g5Ij9yeUxnCQCLcBGAs/s1600/Poderoso%2BChef%25C3%25A3o.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage    
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

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

}