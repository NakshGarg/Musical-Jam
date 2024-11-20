// Function to play sound
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}

// Add event listeners to all instrument buttons
const buttons = document.querySelectorAll('.instrument');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        playSound(sound);
        animateButton(button);
    });
});

// Button animation on click
function animateButton(button) {
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 150);
}
