// Creamos una "clase" (objeto) llamado Media Player
// Config será una serie de parámetros incluyendo el video
function MediaPlayer(config) {
	// Configuramos media igual al video
	this.media = config.element;
	this.plugins = config.plugins || [];
	this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
	// debugger;
	this.plugins.forEach((plugin) => {
		plugin.run(this);
	});
};
MediaPlayer.prototype.mute = function () {
	this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
	this.media.muted = false;
};

// Añadimos la función play mediante el prototipo.
MediaPlayer.prototype.play = function () {
	// lo que hará será que al media (seteado en el constructor), hará play
	this.media.play();
};

MediaPlayer.prototype.pause = function () {
	// lo que hará será que al media (seteado en el constructor), hará play
	this.media.pause();
};

MediaPlayer.prototype.paused = function () {
	// lo que hará será que al media (seteado en el constructor), hará play
	return this.media.paused;
};
MediaPlayer.prototype.togglePlay = function () {
	this.media.paused ? this.media.play() : this.media.pause();
	return this.media.paused;
};

MediaPlayer.prototype.toggleMute = function () {
	this.media.muted = !this.media.muted;
	return this.media.muted;
};

export default MediaPlayer;
