document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("jeepVideo");
    const playButton = document.getElementById("play-button");
    const muteButton = document.getElementById("mute-button");

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play().catch((error) => console.error("Playback error:", error));
            playButton.textContent = '⏸'; // Change to pause icon
        } else {
            video.pause();
            playButton.textContent = '▶'; // Change to play icon
        }
    });

    muteButton.addEventListener("click", () => {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? '🔇' : '🔈'; // Update icon
    });
});
