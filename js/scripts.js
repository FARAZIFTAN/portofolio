// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
document.querySelectorAll('button[data-modal]').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

document.querySelectorAll('.modal-close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

});
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const typewriterText = "I am a passionate web developer.";
    let index = 0;

    function type() {
        if (index < typewriterText.length) {
            typewriterElement.textContent += typewriterText.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});

