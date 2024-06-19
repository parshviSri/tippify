// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProfileContract {
    struct Profile {
        string name;
        string bio;
        string imageHash;
    }

    mapping(address => Profile) public profiles;

    function createProfile(string memory name, string memory bio, string memory imageHash) public {
        profiles[msg.sender] = Profile(name, bio, imageHash);
    }

    function getProfile(address user) public view returns (Profile memory) {
        return profiles[user];
    }
}
