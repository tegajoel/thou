import { Hex, createPublicClient, formatEther, http, parseEther} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { arbitrumSepolia } from "viem/chains";

import dotenv from "dotenv";

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(privateKey as Hex);

(async () => {
    
})();