const { ethers } = require("ethers");

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Wallet to manage the treasury
const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

// Function to get the current balance of the treasury
async function getBalance() {
    const balance = await wallet.getBalance();
    console.log("Treasury Balance:", ethers.utils.formatEther(balance));
    return balance;
}

// Function to send funds from the treasury
async function sendFunds(toAddress, amountInEther) {
    const tx = {
        to: toAddress,
        value: ethers.utils.parseEther(amountInEther)
    };
    const transaction = await wallet.sendTransaction(tx);
    console.log("Transaction Hash:", transaction.hash);
    await transaction.wait();
    console.log("Transaction confirmed.");
}

// Example usage
getBalance();
sendFunds("RECIPIENT_ETH_ADDRESS", "0.1");
