pragma solidity ^0.8.28;

import "hardhat/console.sol";

// contract SolidityTest {
abstract contract SolidityTest {
   
  // constructor() public {
  constructor() {
  }
   
  function getResult() public pure returns(uint){
    console.log("getResult!");

    uint a = 1;
    uint b = 2;

    uint result = a + b;
    
    return result;
  }
}
