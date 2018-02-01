'use strict';

const keys = {
    a: "sounds/clap.wav"
    ,s: "sounds/hihat.wav"
    ,d: "sounds/kick.wav"
    ,f: "sounds/openhat.wav"
    ,g: "sounds/boom.wav"
    ,h: "sounds/ride.wav"
    ,j: "sounds/snare.wav"
    ,k: "sounds/tom.wav"
    ,l: "sounds/tink.wav"
}

document.addEventListener('keypress', (event) => {
  const keyName = event.key.toLowerCase();
  if(keys.hasOwnProperty(keyName)) {
      play(keys[keyName]);
      animate(keyName);
  }
});

function play(str) {
    new Audio(str).play();
}

function animate(keyName) {
    const el = document.getElementById(keyName);
    el.classList.remove("animated");
    void el.offsetWidth //triggers reflow, for resetting anim
    el.classList.add("animated");
}