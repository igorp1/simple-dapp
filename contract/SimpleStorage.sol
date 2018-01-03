pragma solidity ^0.4.17;

contract SimpleStorage {

    int storedData;
    
    function get() public constant returns (int) {
        return storedData;
    }
    
    function set(int x) public {
        storedData = x;
    }

    function add(int x) public {
        storedData = storedData + x;
    }
    
    function increment() public {
        storedData += 1;
    }
    
    function reset() public {
        storedData = 0;
    }
    

}