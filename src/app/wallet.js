import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const WalletConnection = ({ setWalletAddress }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    }
  }, [setWalletAddress]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Please install MetaMask!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default WalletConnection;
