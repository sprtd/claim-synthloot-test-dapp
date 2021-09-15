const PetShop = artifacts.require('../contracts/PetShop.sol')



module.exports = async deployer => {
  try {
    deployer.deploy(PetShop)
    const petShop = await PetShop.deployed()
    console.log('pet shop address: ', petShop.address)

  } catch(err) {
    console.log(err)
  }

}