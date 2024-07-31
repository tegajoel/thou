import { createPublicClient, http } from "viem";
import { mainnet } from 'viem/chains'
import { privateKeyToAccount } from "viem/accounts";
require('dotenv').config()

//TINATB pass
const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(privateKey);

const client = createPublicClient({
    chain:mainnet,
    transport: http(),
})

const blockNumber = await client.getBlockNumber()