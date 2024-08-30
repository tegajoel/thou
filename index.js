const IPFS = require('helia');
const { unixfs } = require('@helia/unixfs');

let helia;
let fs;
let audioPlayer;

async function initializeHelia() {
    try {
        helia = await createHelia();
        fs = unixfs(helia);
        console.log('Helia initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Helia:', error);
        throw error;
    }
}

async function initializeAudioPlayer(ipfsHash) {
    await initializeHelia();
    document.addEventListener("DOMContentLoaded", function () {
        audioPlayer = document.getElementById("audio-player");
        const loadButton = document.getElementById("load-music");

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

async function loadMusicFromIPFS(ipfsHash) {
    try {
        const chunks = [];
        for await (const chunk of fs.cat(ipfsHash)) {
            chunks.push(chunk);
        }
        const file = new Blob(chunks);
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        audioPlayer.load();
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

module.exports = {
    initializeAudioPlayer,
    loadMusicFromIPFS,
    getPrice
};

//