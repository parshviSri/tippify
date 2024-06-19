import React, { useState, useEffect } from "react";
import axios from "axios";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Profile = ({ walletAddress }) => {
  const [profile, setProfile] = useState({ name: "", bio: "", imageHash: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/profiles/${walletAddress}`);
        setProfile(response.data);
      } catch (error) {
        console.error("Profile not found");
      }
      setLoading(false);
    };

    fetchProfile();
  }, [walletAddress]);

  const createProfile = async () => {
    const { name, bio, imageFile } = profile;
    let imageHash = "";

    if (imageFile) {
      const added = await client.add(imageFile);
      imageHash = added.path;
    }

    await axios.post("/profiles", {
      address: walletAddress,
      name,
      bio,
      imageHash,
    });

    setProfile({ ...profile, imageHash });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Bio"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) =>
          setProfile({ ...profile, imageFile: e.target.files[0] })
        }
      />
      <button onClick={createProfile}>Create Profile</button>
      {profile.imageHash && (
        <div>
          <p>{profile.name}</p>
          <p>{profile.bio}</p>
          <img
            src={`https://ipfs.infura.io/ipfs/${profile.imageHash}`}
            alt="Profile"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
