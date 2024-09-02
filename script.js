// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    // Section colors based on scroll
    const sections = document.querySelectorAll('.section');
    let activeSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Offset for header height
        if (window.scrollY >= sectionTop) {
            activeSection = section.id;
            // Add visibility class when section is in view
            section.classList.add('visible');
        }
    });

    // Change navbar style when scrolled
    switch (activeSection) {
        case 'home':
            navbar.style.backgroundColor = '#0d47a1'; // Dark Blue
            break;
        case 'about':
            navbar.style.backgroundColor = '#2e7d32'; // Dark Green
            break;
        case 'services':
            navbar.style.backgroundColor = '#ef6c00'; // Dark Orange
            break;
        case 'contact':
            navbar.style.backgroundColor = '#c2185b'; // Dark Pink
            break;
        default:
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }

    // Show/Hide Back to Top Button
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTop.style.display = 'block';
    } else {
        navbar.classList.remove('scrolled');
        backToTop.style.display = 'none';
    }
});

// Smooth Scroll to Sections
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
