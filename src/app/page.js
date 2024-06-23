"use client";
import React, { useState } from "react";
import WalletConnection from "./wallet";
import Profile from "./profile";
import Tip from "./tip";
import Dashboard from "./dashboard";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [newUser, setNewUser] = useState(false)
  return (
    // <div  className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
    //   <h1>Tippify</h1>
    //   {walletAddress && <h2>Welcome - {walletAddress}</h2>}
    //   {!walletAddress && (
    //     <WalletConnection setWalletAddress={setWalletAddress} />
    //   )}
    //   {walletAddress && (
    //     <>
    //       <Tip walletAddress={walletAddress} />
    //     </>
    //   )}
    //   {newUser && <Profile walletAddress={walletAddress}/>}
    //   <button
    //     onClick={()=> setNewUser(true)}
    //     className="w-30 p-2 bg-gray-600 text-white rounded-md"
    //   >
    //     Create Profile
    //   </button>
    // </div>
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
      <Dashboard />
    </div>
  );
}
