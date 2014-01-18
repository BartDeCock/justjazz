window.onload = function() {
	var allAudio = document.getElementsByTagName("audio");
	for(var x=0; x <= 3; x++) {
		var audio = allAudio[x];
		audio.addEventListener("play", stopOtherAudio, false);
	};
	
	function stopOtherAudio() {
		for(var x=0; x <= allAudio.length; x++) {
			if (allAudio[x].currentSrc !== this.currentSrc) {
				allAudio[x].pause();
				allAudio[x].currentTime=0;
 			}
		}
	};
}