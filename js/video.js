var video;
var new_speed

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// we added that below
	video.play();
	// added with Colleen
	let vol= document.querySelector("#volume").innerHTML= (video.volume*100)+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	// we added that below
	video.pause();
});
// I added this

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate= video.playbackRate*.9;
	console.log(video.playbackRate);
	// we added that below
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate= video.playbackRate/.9;
	console.log(video.playbackRate);
	// we added that below
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	// console.log(this);
	// let vol= this;
	// console.log(this.value);
	// document.querySelector(vol).innerHTML;
	video.volume= (document.querySelector("#volumeSlider").value)/100;
	console.log(video.volume);
	document.getElementById("volume").innerHTML = volumeSlider.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	// we added that below
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted= false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted= true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	// we added that below
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	video.currentTime= video.currentTime+ 5;
	if(video.ended){
		video.load();
		video.play();
	}
	console.log("Current location: " + video.currentTime);
	// we added that below
});

document.querySelector("#old").addEventListener("click", function() {
	document.querySelector("#myVideo").classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	document.querySelector("#myVideo").classList.remove("oldTime");
});