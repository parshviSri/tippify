// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TipContract {
    event TipSent(address indexed from, address indexed to, uint256 amount);

    function sendTip(address payable creator) external payable {
        require(msg.value > 0, "Tip amount must be greater than zero");
        creator.transfer(msg.value);
        emit TipSent(msg.sender, creator, msg.value);
    }
}
