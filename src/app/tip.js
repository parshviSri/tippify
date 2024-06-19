import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const Tip = ({ walletAddress }) => {
  const [creatorAddress, setCreatorAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const sendTip = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(walletAddress);

    const tx = await signer.sendTransaction({
      to: creatorAddress,
      value: ethers.utils.parseEther(amount.toString()),
    });

    await tx.wait();

    await axios.post("/tips", {
      fromAddress: walletAddress,
      creatorAddress,
      amount,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Creator Address"
        value={creatorAddress}
        onChange={(e) => setCreatorAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={sendTip}>Send Tip</button>
    </div>
  );
};

export default Tip;
