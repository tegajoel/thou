document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const loadButton = document.getElementById("load-music");

    loadButton.addEventListener("click", async () => {
        try {
            // Replace 'YOUR_IPFS_HASH' with the actual IPFS hash of your audio file.
            const ipfsHash = "YOUR_IPFS_HASH";

            // Construct the IPFS gateway URL.
            const ipfsGatewayURL = `https://ipfs.io/ipfs/${ipfsHash}`;

            // Set the source of the audio element to the IPFS gateway URL.
            audioPlayer.src = ipfsGatewayURL;
            audioPlayer.load();
        } catch (error) {
            console.error("Error loading music from IPFS:", error);
        }
    });
});
