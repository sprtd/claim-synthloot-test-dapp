// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.0;


contract PetShop {
  address[16] adopters;

  event Adopted(address indexed caller, uint petId, uint timestamp);

 
  function adoptPet(uint _petId)  public returns(uint) {

    if(adopters[_petId] != address(0)) {
      revert('pet already owned');
    }
    
    require(_petId >= 0 && _petId < 15, 'pet id must be within 0 - 16 range');
    adopters[_petId] = msg.sender;
    emit Adopted(msg.sender, _petId, block.timestamp);
    return _petId;
  }


  function getAdopters() public view returns(address[16] memory) {
    return adopters;

  }

  function getSpecificAdopter(uint _petId) public view returns(address) {
    return adopters[_petId];
  }

  
}