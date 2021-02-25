// Creamos una "clase" (objeto) llamado Media Player
// Config será una serie de parámetros incluyendo el video
function mediaPlayer(config) {
	// Configuramos media igual al video
	this.media = config.element;
}

// Añadimos la función play mediante el prototipo.
mediaPlayer.prototype.play = function () {
	// lo que hará será que al media (seteado en el constructor), hará play
	this.media.play();
};

mediaPlayer.prototype.pause = function () {
	// lo que hará será que al media (seteado en el constructor), hará play
	this.media.pause();
};

mediaPlayer.prototype.paused = function () {
	// lo que hará será que al media (seteado en el constructor), hará play
	return this.media.paused;
};
mediaPlayer.prototype.togglePlay = function () {
	this.media.paused ? this.media.play() : this.media.pause();
};

export default MediaPlayer;
