document.addEventListener('DOMContentLoaded', () => {
    // Rain Generation
    const rainSection = document.querySelector('.rain');
    const numberOfRaindrops = 80;

    if (rainSection) {
        for (let i = 0; i < numberOfRaindrops; i++) {
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
            raindrop.style.animationDelay = `${Math.random() * 3}s`;
            rainSection.appendChild(raindrop);
        }
    }

    // Cloud Generation
    const cloudsSection = document.querySelector('.clouds');
    const numberOfClouds = 4;

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');

        // Random vertical position (top 30%)
        cloud.style.top = `${Math.random() * 30}%`;

        // Random width and height
        const width = Math.random() * 600 + 600;
        const height = Math.random() * 300 + 200;
        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;

        // Random border radius
        cloud.style.borderRadius = `${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}%`;

        // Random animation duration and delay
        const floatDuration = Math.random() * 45 + 25;
        const floatDelay = Math.random() * 2;
        cloud.style.animationDuration = `${floatDuration}s`;
        cloud.style.animationDelay = `${floatDelay}s`;

        cloudsSection.appendChild(cloud);
    }

    if (cloudsSection) {
        for (let i = 0; i < numberOfClouds; i++) {
            createCloud();
        }
    }
});
