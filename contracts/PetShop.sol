// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.0;


contract PetShop {
  address[16] adopters;

 
  function adoptPet(uint _petId)  public returns(uint) {

    if(adopters[_petId] != address(0)) {
      revert('pet already owned');
    }
    
    require(_petId >= 0 && _petId < 15, 'pet id must be within 0 - 16 range');
    adopters[_petId] = msg.sender;
    return _petId;
  }


  function getAdopters() public view returns(address[16] memory) {
    return adopters;

  }

  function getSpecificAdopter(uint _petId) public view returns(address) {
    return adopters[_petId];
  }

  
}