// Surprise Button Logic
document.getElementById("surprise-btn").addEventListener("click", () => {
    const surpriseContent = document.getElementById("surprise-content");
    surpriseContent.classList.toggle("hidden"); // Toggle visibility
  });
  
  // Control de música de fondo
const musicControl = document.getElementById('music-control');
const backgroundMusic = document.getElementById('background-music');

musicControl.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicControl.textContent = '♪ Pausar música';
  } else {
    backgroundMusic.pause();
    musicControl.textContent = '♪ Reproducir música';
  }
});
