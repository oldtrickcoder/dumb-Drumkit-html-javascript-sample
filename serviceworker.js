const staticDevCoffee = "Second Chance DrumKit";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/functional.js",
  "/assets/images/josh-sorenson-MjIMc6uhwrE-unsplash.jpg",
  "/assets/sounds/Acoustic Closed Hat 09.wav",
  "/assets/sounds/Acoustic Crash 04.wav",
  "/assets/sounds/Acoustic Hat Bell 01.wav",
  "/assets/sounds/Acoustic High Tom 01.wav",
  "/assets/sounds/Acoustic Kick 01.wav",
  "/assets/sounds/Acoustic Low Tom 01.wav",
  "/assets/sounds/Acoustic Mid Tom 01.wav",
  "/assets/sounds/Acoustic Snare 01.wav",
  "/assets/sounds/Acoustic Sticks 01.wav",
  "/assets/sounds/hihat-Acoustic Closed Hat 01.wav",
  "/assets/sounds/hihat-Acoustic Open Hat 01.wav",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
