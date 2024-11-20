import { Hex } from "viem";

const { createWalletClient, http, publicActions } = require('viem');
const { privateKeyToAccount } = require('viem/accounts');
const { arbitrumSepolia } = require('viem/chains');
const dotenv = require('dotenv');
const FancToken: { abi: any; bytecode: string } = require('../artifacts/FancToken.json');

dotenv.config();

const { abi, bytecode } = FancToken;
//const bin = FancToken.data.bytecode;
//const bin = FancToken.bytecode || FancToken.evm?.bytecode?.object;
const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(privateKey);

const constructorArgs : { abi: any; bytecode: string } = require('../artifacts/constructor.json');

(async () => {
    // Create the client
    const client = createWalletClient({
        account,
        chain: arbitrumSepolia,
        transport: http(process.env.API_URL),
    }).extend(publicActions);

    // Deploy the contract
    const hash = await client.deployContract({
        abi,
        bytecode: '0x6080604052348015600e575f80fd5b50604051610177380380610177833981016040819052602b91606c565b5f5460408051918252602082018390527f5e7d811157cdd9105f91e63f7ef00916403b4f75efa70c63743e25d854979b4f910160405180910390a15f556082565b5f60208284031215607b575f80fd5b5051919050565b60e98061008e5f395ff3fe6080604052348015600e575f80fd5b50600436106030575f3560e01c80630c55699c1460345780639435337e14604d575b5f80fd5b603b5f5481565b60405190815260200160405180910390f35b605c6058366004609d565b605e565b005b5f5460408051918252602082018390527f5e7d811157cdd9105f91e63f7ef00916403b4f75efa70c63743e25d854979b4f910160405180910390a15f55565b5f6020828403121560ac575f80fd5b503591905056fea264697066735822122076b925e8b9c01274f6cc30ee99ad7ad95d3528c7a8f446f75280379764a87ca464736f6c63430008190033',
        args: constructorArgs,
    });
    console.log("Deployment transaction hash:", hash);

})();
