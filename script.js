// JavaScript for the GitHub Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    // Apply reveal animations to sections
    sr.reveal('.about-content', { delay: 200 });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.virtue-card', { interval: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.education-item', { interval: 200 });
    sr.reveal('.certification-item', { interval: 100 });
    sr.reveal('.contact-info', { delay: 200 });
    sr.reveal('.contact-form', { delay: 400 });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Theme toggle
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Simulate API call
            setTimeout(() => {
                alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }

    // Download CV button
    const downloadCvButton = document.getElementById('download-cv');
    if (downloadCvButton) {
        downloadCvButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Esta funcionalidad estaría conectada a la descarga del CV en un entorno de producción.');
        });
    }

    // Initialize skill bars animation
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Set initial width to 0
    skillLevels.forEach(level => {
        level.style.width = '0';
    });
    
    // Create intersection observer for skill bars
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the target width from the style attribute
                const targetWidth = entry.target.getAttribute('style').split('width:')[1].split('%')[0].trim();
                // Animate to the target width
                setTimeout(() => {
                    entry.target.style.width = targetWidth + '%';
                }, 200);
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe each skill level
    skillLevels.forEach(level => {
        observer.observe(level);
    });
});
