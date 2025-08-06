const keyToSound = {
  a: 'music album/crash.mp3',
  s: 'music album/snare.mp3',
  d: 'music album/tom-4.mp3',
  w: 'music album/tom-1.mp3',
  j: 'music album/tom-2.mp3',
  k: 'music album/tom-3.mp3',
  l: 'music album/crash.mp3',
};

function playSound(key) {
  const sound = keyToSound[key];
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
}

function animateButton(key) {
  const btn = document.querySelector(`.drum-button[data-key="${key}"]`);
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 150);
  }
}

// Keyboard control
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  playSound(key);
  animateButton(key);
});

// Mouse click
document.querySelectorAll('.drum-button').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    playSound(key);
    animateButton(key);
  });
});
// Add visual feedback: floating 🎵 note
function createNote(button) {
  const note = document.createElement("div");
  note.className = "note";
  note.innerText = "🎵";

  const rect = button.getBoundingClientRect();
  note.style.position = "absolute";
  note.style.left = `${rect.left + rect.width / 2}px`;
  note.style.top = `${rect.top - 20}px`;
  note.style.fontSize = "24px";
  note.style.animation = "floatUp 1s ease-out forwards";
  document.body.appendChild(note);

  setTimeout(() => note.remove(), 1000);
}

// Add floating note on each click or key press
document.querySelectorAll(".drum-button").forEach(button => {
  button.addEventListener("click", () => createNote(button));
});

document.addEventListener("keydown", function (e) {
  const button = document.querySelector(`.drum-button[data-key="${e.key.toLowerCase()}"]`);
  if (button) createNote(button);
});
// Create floating notes on key press
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const validKeys = ["a", "s", "d", "w", "j", "k", "l"];
  if (validKeys.includes(key)) {
    createFloatingNote(key.toUpperCase());
  }
});

function createFloatingNote(text) {
  const note = document.createElement("div");
  note.className = "note";
  note.innerText = "🎵";
  note.style.left = Math.random() * 90 + "%";
  note.style.top = "70%";
  document.body.appendChild(note);

  note.animate([
    { transform: "translateY(0)", opacity: 1 },
    { transform: "translateY(-100px)", opacity: 0 }
  ], {
    duration: 1000,
    easing: "ease-out"
  });

  setTimeout(() => note.remove(), 1000);
}


  