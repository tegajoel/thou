import React, { useState } from 'react';
import Web3 from 'web3';
import Bank from './holdings';

declare global {
  interface Window {
    ethereum?: any; // Define a minimal type for Ethereum provider
  }
}

const ParentComponent: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);

        // Get the accounts
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        // Get the balance of the connected account
        const balance = await web3.eth.getBalance(accounts[0]);
        setBalance(parseFloat(web3.utils.fromWei(balance, 'ether')));
      } catch (error) {
        console.error('User denied account access or an error occurred:', error);
      }
    } else {
      console.error('No Ethereum provider detected. Install MetaMask.');
    }
  };

  const disconnectWallet = () => {
    // Clear the account and balance state
    setAccount(null);
    setBalance(0);
  };

  return (
    <div>
      {!account ? (
        <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Connect Wallet
        </button>
      ) : (
        <>
          <button onClick={disconnectWallet} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Disconnect Wallet
          </button>
          <Bank account={account} balance={balance} />
        </>
      )}
    </div>
  );
};

export default ParentComponent;
