// Scroll event handler
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Dynamic opacity based on scroll
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const opacity = Math.min(scrollPosition / 200, 0.9);
    navbar.style.opacity = `${1 - opacity}`;
});

// Handle active state and smooth hover transitions
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    // Click event for active state
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });

    // Mouse enter for hover animation
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.4s ease';
    });

    // Mouse leave to reset
    link.addEventListener('mouseleave', () => {
        if (!link.classList.contains('active')) {
            link.style.background = '';
            link.style.boxShadow = '';
        }
    });
});

// Smooth scroll for anchor links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});