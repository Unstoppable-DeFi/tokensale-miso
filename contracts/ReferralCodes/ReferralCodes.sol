// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ReferralCodesRegistry {
    mapping (string => address) public code2address;
    mapping (address => string) public address2code;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    event CodeRegistered(address indexed account, string code);

    function registerCode(string calldata _code) public {
        require(bytes(_code).length > 0, "invalid code");
        require(code2address[_code] == address(0), "code already registered");

        delete code2address[address2code[msg.sender]];

        code2address[_code] = msg.sender;
        address2code[msg.sender] = _code;

        emit CodeRegistered(msg.sender, _code);
    }

    function adminOverride(address _account, string calldata _code) public {
        require(msg.sender == owner, "unauthorized");

        delete code2address[address2code[_account]];

        code2address[_code] = _account;
        address2code[_account] = _code;

        emit CodeRegistered(_account, _code);
    }
}