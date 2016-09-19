"use strict";

function PianoApp()
{
	var version = "v6.1",
		audioManager = new AudioManager("audio");

	function setStatus(message){
		$("#app>footer").text(message);
	}

	this.start = function() {
		$("#app>header").append(version);
		setStatus("ready");
	}
}


$(function() {
	window.app = new PianoApp();
	window.app.start();
});