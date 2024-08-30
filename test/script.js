const thou = require('thou')

import {expect, jest, test, beforeEach} from '@jest/globals';
import { describe } from 'node/test';

const loadMusicFromIPFS = jest.fn()
document.body.innerHTML = `
    <audio id="audio-player"></audio>
    <button id="load-music">Load Music</button>
`;

describe('initializeAudioPlayer', () => {
    beforeEach(() => {
        // Clear all mocks before each test to avoid interference between tests
        loadMusicFromIPFS.mockClear();
    });
    
    test('should attach event listeners afteer DOMContentLoaded', async () => {
        const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
        const ipfsHash = 'bafybeidlpe3agjgpan22aqv4iu54y7txhoairv5m3scg4iphyhkdcbfpx4';
        initializeAudioPlayer(ipfsHash);
        
        // Simulate DOMContentLoaded event
        const DOMContentLoadedEvent = new Event('DOMContentLoaded');
        document.dispatchEvent(domContentLoadedEvent);
        
        // Check if event Listeners were added correctly
        expect(addEventListenerSpy).toHaveBeenCalledWith('DOMContentLoaded', expect.any(Function));
        
        // Ensure the audio player and button are properly selected
        const audioPlayer = document.getElementById('audio-player');
        const loadButton = document.getElementById('load-music');
        expect(audioPlayer).not.toBeNull();
        expect(loadButton).not.toBeNull();
        
        //Spy on loadButton event Listener
        const loadButtonEventListenerSpy = jest.spyOn(loadButton, 'addEventListener');
        
        // Simulate click event on loadButton
        const clickEvent = new Event('click');
        loadButton.dispatchEvent(clickEvent);
        
        // Verify that the click event listener was added to the loadButton
        expect(loadButtonEventListenerSpy).toHaveBeenCalledWith('click', expect.any(Function));
    
    });

    test('should load music from IPFS when loadButton is clicked', async () => {
        // Mock the function to return expected results
        loadMusicFromIPFS.mockResolvedValue();

        const ipfsHash = 'bafybeidlpe3agjgpan22aqv4iu54y7txhoairv5m3scg4iphyhkdcbfpx4';
        initializeAudioPlayer(ipfsHash);

        // Simulate DOMContentLoaded event
        const domContentLoadedEvent = new Event('DOMContentLoaded');
        document.dispatchEvent(domContentLoadedEvent);

        // Simulate click event on loadButton
        const loadButton = document.getElementById('load-music');
        await loadButton.click();

        // Verify that loadMusicFromIPFS was called with the provided IPFS hash
        expect(loadMusicFromIPFS).toHaveBeenCalledWith(ipfsHash);
    });

    test('should handle errors during music loading', async () => {
        // Mock loadMusicFromIPFS to throw an error
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        loadMusicFromIPFS.mockRejectedValue(new Error('IPFS fetch failed'));

        const ipfsHash = 'bafybeidlpe3agjgpan22aqv4iu54y7txhoairv5m3scg4iphyhkdcbfpx4';
        initializeAudioPlayer(ipfsHash);

        // Simulate DOMContentLoaded event
        const domContentLoadedEvent = new Event('DOMContentLoaded');
        document.dispatchEvent(domContentLoadedEvent);

        // Simulate click event on loadButton
        const loadButton = document.getElementById('load-music');
        await loadButton.click();

        // Verify that the error was caught and logged
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error loading music from IPFS:', expect.any(Error));

        // Cleanup the mock to avoid affecting other tests
        consoleErrorSpy.mockRestore();
    });
});