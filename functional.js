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

function CrashSound() {
  audio1.pause();
  audio1.setAttribute("src", "");
  audio1.setAttribute("src", "./assets/sounds/Acoustic Crash 04.wav");
  audio1.play();
  crash.style.filter = "brightness(1.3)";
  crash.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(crash);
  }, 200);
}
function HighTomSound() {
  audio2.setAttribute("src", "");
  audio2.setAttribute("src", "./assets/sounds/Acoustic High Tom 01.wav");
  audio2.play();
  HighT.style.filter = "brightness(1.3)";
  HighT.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(HighT);
  }, 500);
}
function Kick() {
  audio3.setAttribute("src", "");
  audio3.setAttribute("src", "./assets/sounds/Acoustic Kick 01.wav");
  audio3.play();
  KickEl.style.filter = "brightness(1.3)";
  KickEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(KickEl);
  }, 500);
}
function LowTom() {
  audio4.setAttribute("src", "");
  audio4.setAttribute("src", "./assets/sounds/Acoustic Low Tom 01.wav");
  audio4.play();
  LTom.style.filter = "brightness(1.3)";
  LTom.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(LTom);
  }, 500);
}
function MidTom() {
  audio5.setAttribute("src", "");
  audio5.setAttribute("src", "./assets/sounds/Acoustic Mid Tom 01.wav");
  audio5.play();
  MTom.style.filter = "brightness(1.3)";
  MTom.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(MTom);
  }, 500);
}
function Snare() {
  audio6.setAttribute("src", "");
  audio6.setAttribute("src", "./assets/sounds/Acoustic Snare 01.wav");
  audio6.play();
  SnareEl.style.filter = "brightness(1.3)";
  SnareEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(SnareEl);
  }, 500);
}
function Stick() {
  audio7.setAttribute("src", "");
  audio7.setAttribute("src", "./assets/sounds/Acoustic Sticks 01.wav");
  audio7.play();
  StickEl.style.filter = "brightness(1.3)";
  StickEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(StickEl);
  }, 500);
}
function CloseHat() {
  audio8.setAttribute("src", "");
  audio8.setAttribute(
    "src",
    "./assets/sounds/hihat-Acoustic Closed Hat 01.wav"
  );
  audio8.play();
  CloseHatEl.style.filter = "brightness(1.3)";
  CloseHatEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(CloseHatEl);
  }, 500);
}
function OpenHat() {
  audio9.setAttribute("src", "");
  audio9.setAttribute("src", "./assets/sounds/hihat-Acoustic Open Hat 01.wav");
  audio9.play();
  OpenHatEl.style.filter = "brightness(1.3)";
  OpenHatEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
  setTimeout(() => {
    normalize(OpenHatEl);
  }, 500);
}
function normalize(el) {
  el.style.filter = "brightness(1 )";
  el.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.4)";
}
document.body.addEventListener("keydown", function (e) {
  console.log(e.keyCode);

  if (e.keyCode == 32) {
    console.log("its a space bar");
    Stick();
  }
  if (e.keyCode == 65) {
    CrashSound();
  }
  if (e.keyCode == 83) {
    HighTomSound();
  }
  if (e.keyCode == 90) {
    LowTom();
  }
  if (e.keyCode == 88) {
    MidTom();
  }
  if (e.keyCode == 67) {
    Snare();
  }
  if (e.keyCode == 70) {
    OpenHat();
  }

  if (e.keyCode == 86) {
    CloseHat();
  }
  if (e.keyCode == 68) {
    Kick();
  }
});

// audio1.addEventListener("load", () => {
//   console.log("audio 1 successfully loaded");
// });
// document.addEventListener("load", (e) => {
//   console.log("document loaded");
//   console.log("The page has fully loaded");
//   console.log(e);
//   document.getElementById("loading-explain").style.display = "block";
//   document.getElementById("loading").style.display = "none";

//   document.getElementsByClassName("loading").style.display = "none";
// });
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM IN loaded");
  setTimeout(() => {
    document.getElementById("loading-explain").style.display = "block";
  }, 3000);
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 5000);
});
