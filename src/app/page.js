"use client";
import React, { useState } from "react";
import WalletConnection from "./wallet";
import Profile from "./profile";
import Tip from "./tip";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <div>
      <h1>Tippify</h1>
      <WalletConnection setWalletAddress={setWalletAddress} />
      {walletAddress && (
        <>
          <Profile walletAddress={walletAddress} />
          <Tip walletAddress={walletAddress} />
        </>
      )}
    </div>
  );
}
