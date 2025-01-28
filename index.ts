import ThePlay from "./src/contracts"
import SearchResults from "./app/page"
// import { CID } from 'multiformats/cid'

// import type { Helia } from '@helia/interface'
// import type { UnixFS } from '@helia/unixfs'

// const { createHelia } = require('helia');
// const { unixfs } = require('@helia/unixfs');

// let helia: Helia;
// let fs: UnixFS;
let audioPlayer: HTMLAudioElement;

async function initializeHelia() {
    try {
        // helia = await createHelia();
        // fs = unixfs(helia);
        console.log('Helia initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Helia:', error);
        throw error;
    }
}

async function initializeAudioPlayer(ipfsHash: string) {
    await initializeHelia();
    document.addEventListener("DOMContentLoaded", function () {
        const audioElement = document.getElementById("audio-player") as HTMLAudioElement;
        if (!audioElement) {
            throw new Error("Audio player element not found");
        }
        audioPlayer = audioElement;

        const loadButton = document.getElementById("load-music");
        if (!loadButton) {
            throw new Error("Load button not found");
        }

        loadButton.addEventListener("click", async () => {
            try {
                ipfsHash = await getLatestMusicHash();
                
                await loadMusicFromIPFS(ipfsHash);
            } catch (error) {
                console.error("Error loading music from IPFS:", error);
            }
        });
    });
}

async function loadMusicFromIPFS(ipfsHash: string) {
    try {
        // const cid = CID.parse(ipfsHash);
        // const chunks = [];
        // for await (const chunk of fs.cat(cid)) {
        //     chunks.push(chunk);
        // }
        // const file = new Blob(chunks);
        // const url = URL.createObjectURL(file);
        // audioPlayer.src = url;
        // audioPlayer.load();
    } catch (error) {
        console.error("Error loading music from IPFS:", error);
        throw error;
    }
}

    async function getLatestMusicHash() {
        //fetching Osana AD's fire creations
        return "bafybeidlpe3agjgpan22aqv4iu54y7txhoairv5m3scg4iphyhkdcbfpx4"
    }
    
    function getPrice() {
        return 0.12;
    }
    
    //something like
    
    module.exports = {
      SearchResults, //account comes from a live web3 API
      ThePlay, // contract -described in [tinatb]/index privates
      initializeAudioPlayer,
      loadMusicFromIPFS,
      getPrice
    };
