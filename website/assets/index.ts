import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const playButton: HTMLElement = document.getElementById('play');
const muteButton: HTMLElement = document.getElementById('mute');

// Creamos una instancia de player
const player = new MediaPlayer({
	element: video,
	plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

// creamos la función de
playButton.onclick = () =>
	(playButton.innerHTML = player.togglePlay() ? 'Play' : 'Pause');
muteButton.onclick = () =>
	(muteButton.innerHTML = player.toggleMute() ? 'Unmute' : 'Mute');

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch((error) => {
		console.log(error.message);
	});
}
