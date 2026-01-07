/* ========================================
   RESTAURANTS PAGE - JavaScript
   Ocalicrousty - Menu Sidebar & Interactions
   ======================================== */

// ========================================
// MENU SIDEBAR TOGGLE
// ========================================

const hamburger = document.getElementById('hamburger');
const menuSidebar = document.getElementById('menuSidebar');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');

// Open menu
hamburger.addEventListener('click', () => {
    menuSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close menu - Close button
menuClose.addEventListener('click', () => {
    menuSidebar.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu - Overlay click
menuOverlay.addEventListener('click', () => {
    menuSidebar.classList.remove('active');
    document.body.style.overflow = '';
});

// ========================================
// NAVBAR SCROLL BEHAVIOR
// ========================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========================================
// ANIMATE CARDS ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe restaurant cards
const restaurantCards = document.querySelectorAll('.restaurant-card');

restaurantCards.forEach((card, index) => {
    // Set initial state
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

    // Observe card
    observer.observe(card);
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href !== '#') {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                menuSidebar.classList.remove('active');
                document.body.style.overflow = '';

                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// HIGHLIGHT ACTIVE RESTAURANT
// ========================================

const activeCards = document.querySelectorAll('.restaurant-card.active');

activeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
});

console.log('Restaurants page initialized successfully! 🍗🗺️');
