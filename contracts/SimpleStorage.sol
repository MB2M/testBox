// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SimpleStorage {
  uint storedData;

  event SetEvent(uint value);

  function set(uint x) public {
    storedData = x;

    emit SetEvent(x);
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
