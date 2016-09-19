function AudioManager(audioPath)
{
	audioPath = audioPath || "";
	var audios ={},
		audioExt = getSupportedFileTypeExt();

	function getSupportedFileTypeExt()
	{
		var audio = $("<audio>")[0];
		if (audio.canPlayType("audio/ogg")) return ".ogg";
		if (audio.canPlayType("audio/mpeg")) return ".mp3";
		if (audio.canPlayType("audio/wav")) return ".wav";
		return "";
	}

	function createAudio(name, onLoaded, onError)
	{
		var audio = $("<audio>")[0];
		audio.addEventListener("canplaythrough", function()
		{
			if (onLoaded) onLoaded(audio);
			audio.removeEventListener("canplaythrough", arguments.callee);
		});
		audio.onerror = function()
		{
			if (onError) onError(audio);
		};
		audio.src = audioPath + "/" + name + audioExt;
		return audio;
		
	}

	this.getAudio = function(name, onLoaded, onError)
	{
		var audio = audios[name];
		if (!audio)
		{
			audio = createAudio(name, onLoaded, onError);
			// Add to cache
			audios[name] = audio;
		}
		else if (onLoaded)
		{
			onLoaded(audio);
		}
		return audio;
	}

}