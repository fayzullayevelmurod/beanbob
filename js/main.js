

// Play music
let audio = document.getElementById("myAudio");
let playButton = document.querySelector(".play-music");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.classList.add("playing");
        playButton.innerHTML = '<img src="images/icons/pause.png" alt="" class="pause">';
    } else {
        audio.pause();
        playButton.classList.remove("playing");
        playButton.innerHTML = '<img src="images/icons/play.svg" alt="" class="play">';
    }
}