import MediaPlayer from './MediaPlayer';

const video = document.querySelector('video');
const button = document.querySelector('button');

// Creamos una instancia de player
const player = new MediaPlayer({element: video});

// creamos la función de
button.onclick = () => player.togglePlay();
