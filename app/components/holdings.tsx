import React from 'react';

interface BankProps {
  account: string | null;
  balance: number;
}

const Bank: React.FC<BankProps> = ({ account, balance }) => {
  return (
    <div>
      {account ? (
        <div>
          <p>Connected account: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      ) : (
        <p>No wallet connected</p>
      )}
    </div>
  );
};

export default Bank;
