document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;

    // Rain Generation (30 drops on mobile, 80 on desktop)
    const rainSection = document.querySelector('.rain');
    const numberOfRaindrops = isMobile ? 30 : 80;

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

    // Cloud Generation (Sized proportionally for screen size)
    const cloudsSection = document.querySelector('.clouds');
    const numberOfClouds = isMobile ? 3 : 4;

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');

        // Top vertical offset range (0–30%)
        cloud.style.top = `${Math.random() * 30}%`;

        // Responsive Dimensions
        const width = isMobile ? Math.random() * 150 + 150 : Math.random() * 600 + 600;
        const height = isMobile ? Math.random() * 80 + 60 : Math.random() * 300 + 200;

        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;

        // Organic cloud shapes
        cloud.style.borderRadius = `${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}%`;

        // Random animation duration & delay
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

// Pause background animations when user switches tabs to conserve battery
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('paused');
    } else {
        document.body.classList.remove('paused');
    }
});
