let qKey = document.getElementById("Q");
let wKey = document.getElementById("W");
let eKey = document.getElementById("E");
let rKey = document.getElementById("R");
let aKey = document.getElementById("A");
let sKey = document.getElementById("S");
let dKey = document.getElementById("D");
let fKey = document.getElementById("F");

let q = new Audio("audio/nes-01.wav");
let w = new Audio("audio/nes-02.wav");
let e = new Audio("audio/nes-03.wav");
let r = new Audio("audio/nes-04.wav");
let a = new Audio("audio/nes-05.wav");
let s = new Audio("audio/nes-06.wav");
let d = new Audio("audio/nes-07.wav");
let f = new Audio("audio/nes-08.wav");

document.addEventListener("keydown", function(event) {
  let key = event.code;
  switch (key) {
    case 'KeyQ':
    qKey.classList.add("playing");
    setTimeout(function() {qKey.classList.remove("playing");}, 200);
    q.currentTime = 0;
    q.play();
    break;
    case 'KeyW':
    wKey.classList.add("playing");
    setTimeout(function() {wKey.classList.remove("playing");}, 200);
    w.currentTime = 0;
    w.play();
    break;
    case 'KeyE':
    eKey.classList.add("playing");
    setTimeout(function() {eKey.classList.remove("playing");}, 200);
    e.currentTime = 0;
    e.play();
    break;
    case 'KeyR':
    rKey.classList.add("playing");
    setTimeout(function() {rKey.classList.remove("playing");}, 200);
    r.currentTime = 0;
    r.play();
    break;
    case 'KeyA':
    aKey.classList.add("playing");
    setTimeout(function() {aKey.classList.remove("playing");}, 200);
    a.currentTime = 0;
    a.play();
    break;
    case 'KeyS':
    sKey.classList.add("playing");
    setTimeout(function() {sKey.classList.remove("playing");}, 200);
    s.currentTime = 0;
    s.play();
    break;
    case 'KeyD':
    dKey.classList.add("playing");
    setTimeout(function() {dKey.classList.remove("playing");}, 200);
    d.currentTime = 0;
    d.play();
    break;
    case 'KeyF':
    fKey.classList.add("playing");
    setTimeout(function() {fKey.classList.remove("playing");}, 200);
    f.currentTime = 0;
    f.play();
    break;
  }

});

qKey.addEventListener("click", function(){
    qKey.classList.add("playing");
    setTimeout(function() {qKey.classList.remove("playing");}, 200);
    q.currentTime = 0;
    q.play();
});

wKey.addEventListener("click", function(){
  wKey.classList.add("playing");
  setTimeout(function() {wKey.classList.remove("playing");}, 200);
    w.currentTime = 0;
    w.play();
});

eKey.addEventListener("click", function(){
  eKey.classList.add("playing");
  setTimeout(function() {eKey.classList.remove("playing");}, 200);
    e.currentTime = 0;
    e.play();
});

rKey.addEventListener("click", function(){
  rKey.classList.add("playing");
  setTimeout(function() {rKey.classList.remove("playing");}, 200);
    r.currentTime = 0;
    r.play();
});

aKey.addEventListener("click", function(){
  aKey.classList.add("playing");
  setTimeout(function() {aKey.classList.remove("playing");}, 200);
    a.currentTime = 0;
    a.play();
});

sKey.addEventListener("click", function(){
  sKey.classList.add("playing");
  setTimeout(function() {sKey.classList.remove("playing");}, 200);
    s.currentTime = 0;
    s.play();

});

dKey.addEventListener("click", function(){
  dKey.classList.add("playing");
  setTimeout(function() {dKey.classList.remove("playing");}, 200);
    d.currentTime = 0;
    d.play();
});

fKey.addEventListener("click", function(){
  fKey.classList.add("playing");
  setTimeout(function() {fKey.classList.remove("playing");}, 200);
    f.currentTime = 0;
    f.play();
});
