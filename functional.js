// ./assets/sounds/Acoustic Crash 04.wav
const audioSource = document.getElementById("audiosource");
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
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic Crash 04.wav");
  console.log("play crash Sound");
  audioSource.play();
}
function HighTomSound() {
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic High Tom 01.wav");
  console.log("play High Tom Sound");
  audioSource.play();
}
function Kick() {
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic Kick 01.wav");
  console.log("play Kick Sound");
  audioSource.play();
}
function LowTom() {
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic Low Tom 01.wav");
  console.log("play Low Tom Sound");
  audioSource.play();
}
function MidTom() {
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic Mid Tom 01.wav");
  console.log("play Mid Tom Sound");
  audioSource.play();
}
function Snare() {
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic Snare 01.wav");
  console.log("play Snare Sound");
  audioSource.play();
}
function Stick() {
  console.log("set sound");
  audioSource.setAttribute("src", "./assets/sounds/Acoustic Sticks 01.wav");
  console.log("play Stick Sound");
  audioSource.play();
}
function CloseHat() {
  console.log("set sound");
  audioSource.setAttribute(
    "src",
    "./assets/sounds/hihat-Acoustic Closed Hat 01.wav"
  );
  console.log("play Close Hat Sound");
  audioSource.play();
}
function OpenHat() {
  console.log("set sound");
  audioSource.setAttribute(
    "src",
    "./assets/sounds/hihat-Acoustic Open Hat 01.wav"
  );
  console.log("play Open Hat Sound");
  audioSource.play();
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
    StickEl.style.filter = "brightness(1.3)";
    StickEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(StickEl);
    }, 500);
  }
  if (e.keyCode == 65) {
    CrashSound();
    crash.style.filter = "brightness(1.3)";
    crash.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(crash);
    }, 500);
  }
  if (e.keyCode == 83) {
    HighTomSound();
    HighT.style.filter = "brightness(1.3)";
    HighT.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(HighT);
    }, 500);
  }
  if (e.keyCode == 90) {
    LowTom();
    LTom.style.filter = "brightness(1.3)";
    LTom.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(LTom);
    }, 500);
  }
  if (e.keyCode == 88) {
    MidTom();
    MTom.style.filter = "brightness(1.3)";
    MTom.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(MTom);
    }, 500);
  }
  if (e.keyCode == 67) {
    Snare();
    SnareEl.style.filter = "brightness(1.3)";
    SnareEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(SnareEl);
    }, 500);
  }
  if (e.keyCode == 70) {
    OpenHat();
    OpenHatEl.style.filter = "brightness(1.3)";
    OpenHatEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(OpenHatEl);
    }, 500);
  }

  if (e.keyCode == 86) {
    CloseHat();
    CloseHatEl.style.filter = "brightness(1.3)";
    CloseHatEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(CloseHatEl);
    }, 500);
  }
  if (e.keyCode == 68) {
    Kick();
    KickEl.style.filter = "brightness(1.3)";
    KickEl.style.boxShadow = "10px 10px 10px rgba(20, 20, 20, 0.05)";
    setTimeout(() => {
      normalize(KickEl);
    }, 500);
  }
});
