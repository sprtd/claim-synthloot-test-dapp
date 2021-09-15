const PetShop = artifacts.require('./PetShop.sol')
let petShop, accounts, deployer, addr1, addr2 

contract('PetShop', async accountList => {
  accounts = accountList
  deployer = accounts[0]
  addr1 = accounts[1]
  addr2  = accounts[2]

  beforeEach(async() => {
    petShop = await PetShop.deployed()
  })


  contract('Adoption', () => {
    it('adopts pet', async() => {
      await petShop.adoptPet(1, { from: addr1 })
      const petOwner = await petShop.getSpecificAdopter(1)
      console.log('pet owner: ' , petOwner)

      const adopters = await petShop.getAdopters()

      assert.strictEqual(adopters.includes(addr2), true, 'pet not adopted by specified address')

    })
  })
})