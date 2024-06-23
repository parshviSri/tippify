import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Profile = ({ walletAddress }) => {
  const [profile, setProfile] = useState({ name: "", bio: "", imageHash: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  // Add your contract address and ABI here
  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const contractABI = [
    // ABI of the ProfileContract
    "function createProfile(string name, string bio, string imageHash) public",
    "function getProfile(address user) public view returns (tuple(string name, string bio, string imageHash))",
  ];

  const createProfile = async () => {
    setLoading(true);
    setError("");

    try {
      const { name, bio, imageFile } = profile;
      let imageHash = "";

      if (imageFile) {
        const added = await client.add(imageFile);
        imageHash = added.path;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      await contract.createProfile(name, bio, imageHash);

      setProfile({ ...profile, imageHash });
    } catch (error) {
      console.error("Error creating profile", error);
      setError("Failed to create profile. Please try again.");
    }

    setLoading(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, imageFile: file });
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Create Profile</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Bio"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <input
        type="file"
        onChange={handleImageChange}
        className="w-full p-2 mb-4 border rounded-md"
      />
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      )}
      <button
        onClick={createProfile}
        className="w-full p-2 bg-blue-600 text-white rounded-md"
      >
        Create Profile
      </button>
      {profile.imageHash && (
        <div className="mt-4">
          <p className="text-xl font-semibold">{profile.name}</p>
          <p className="text-gray-700">{profile.bio}</p>
          <img
            src={`https://ipfs.infura.io/ipfs/${profile.imageHash}`}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mt-4"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
