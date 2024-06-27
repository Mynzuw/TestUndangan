export const confetti = window.confetti;

function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#808080'] // Gray color
    });
}

document.addEventListener('DOMContentLoaded', () => {
    launchConfetti();
});
