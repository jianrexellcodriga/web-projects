const glassCard = document.getElementById('myGlassCard');
const turbulence = document.querySelector('#liquid-distortion feTurbulence');

let mouseX = 0;
let mouseY = 0;
let animationFrameId = null;

document.addEventListener('mousemove', (event) => {
    // Get mouse position relative to the card
    const cardRect = glassCard.getBoundingClientRect();
    mouseX = (event.clientX - cardRect.left) / cardRect.width;
    mouseY = (event.clientY - cardRect.top) / cardRect.height;
    
    // Animate the effect based on mouse movement
    if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateTurbulence);
    }
});

function updateTurbulence() {
    const frequency = `0.005 ${0.005 + (mouseY * 0.01)}`;
    const scale = 50 + (mouseX * 50);

    turbulence.setAttribute('baseFrequency', frequency);
    document.querySelector('#liquid-distortion feDisplacementMap').setAttribute('scale', scale);

    animationFrameId = requestAnimationFrame(updateTurbulence);
}

// Stop the animation when the mouse leaves the card
glassCard.addEventListener('mouseleave', () => {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    // Reset to initial state
    turbulence.setAttribute('baseFrequency', '0.005 0.005');
    document.querySelector('#liquid-distortion feDisplacementMap').setAttribute('scale', '50');
});
