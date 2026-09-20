document.addEventListener('DOMContentLoaded', () => {
    const rainSection = document.querySelector('.rain');
    const numberOfRaindrops = 100;

    for (let i = 0; i < numberOfRaindrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        raindrop.style.animationDelay = `${Math.random() * 3}s`;
        rainSection.appendChild(raindrop);
    }
});
