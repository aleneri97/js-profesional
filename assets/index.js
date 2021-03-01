import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const playButton = document.getElementById('play');
const muteButton = document.getElementById('mute');

// Creamos una instancia de player
const player = new MediaPlayer({element: video, plugins: [new AutoPlay()]});

// creamos la función de
playButton.onclick = () =>
	(playButton.innerHTML = player.togglePlay() ? 'Play' : 'Pause');
muteButton.onclick = () =>
	(muteButton.innerHTML = player.toggleMute() ? 'Unmute' : 'Mute');
