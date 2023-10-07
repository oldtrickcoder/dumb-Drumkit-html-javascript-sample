// ./assets/sounds/Acoustic Crash 04.wav
const audio1 = document.getElementById("audiosource");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");
const audio10 = document.getElementById("audio10");

// JUST COMMENT IT
const crash = document.getElementById("Crash");
const HighT = document.getElementById("HighTom");
const KickEl = document.getElementById("Kick");
const LTom = document.getElementById("LowTom");
const MTom = document.getElementById("MidTom");
const SnareEl = document.getElementById("Snare");
const CloseHatEl = document.getElementById("CloseHat");
const OpenHatEl = document.getElementById("OpenHat");
const StickEl = document.getElementById("Sticks");
const HatBell = document.getElementById("HatBell");

//////
function PlayingComponents(el, elStyle, audioSource) {
  el.pause();
  el.setAttribute("src", "");
  el.setAttribute("src", audioSource);
  el.play();
  elStyle.style.filter = "brightness(1.3)";
  elStyle.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(elStyle);
  }, 200);
}

function normalize(el) {
  el.style.filter = "brightness(1 )";
  el.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.4)";
}
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 71) {
    PlayingComponents(
      audio10,
      HatBell,
      "./assets/sounds/Acoustic Hat Bell 01.wav"
    );
  }
  if (e.keyCode == 32) {
    PlayingComponents(
      audio7,
      StickEl,
      "./assets/sounds/Acoustic Sticks 01.wav"
    );
  }
  if (e.keyCode == 65) {
    PlayingComponents(audio1, crash, "./assets/sounds/Acoustic Crash 04.wav");
  }
  if (e.keyCode == 83) {
    PlayingComponents(
      audio2,
      HighT,
      "./assets/sounds/Acoustic High Tom 01.wav"
    );
  }
  if (e.keyCode == 90) {
    PlayingComponents(audio4, LTom, "./assets/sounds/Acoustic Low Tom 01.wav");
  }
  if (e.keyCode == 88) {
    PlayingComponents(audio5, MTom, "./assets/sounds/Acoustic Mid Tom 01.wav");
  }
  if (e.keyCode == 67) {
    PlayingComponents(
      audio6,
      SnareEl,
      "./assets/sounds/Acoustic Snare 01.wav "
    );
  }
  if (e.keyCode == 70) {
    PlayingComponents(
      audio9,
      OpenHatEl,
      "./assets/sounds/hihat-Acoustic Open Hat 01.wav"
    );
  }

  if (e.keyCode == 86) {
    PlayingComponents(
      audio8,
      CloseHatEl,
      "./assets/sounds/Acoustic Closed Hat 09.wav"
    );
  }
  if (e.keyCode == 68) {
    PlayingComponents(audio3, KickEl, "./assets/sounds/Acoustic Kick 01.wav");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loading-explain").style.display = "block";
  }, 3000);
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 5000);
});
