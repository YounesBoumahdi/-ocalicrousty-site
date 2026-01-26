/* ========================================
   FRANCHISE PAGE - JavaScript
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
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

// Close menu - Close button
menuClose.addEventListener('click', () => {
    menuSidebar.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// Close menu - Overlay click
menuOverlay.addEventListener('click', () => {
    menuSidebar.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

// ========================================
// NAVBAR SCROLL BEHAVIOR
// ========================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only apply hide/show after scrolling past threshold
    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        // At top of page - always show navbar
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========================================
// FORM VALIDATION & SUBMISSION - Web3Forms
// ========================================

const franchiseForm = document.getElementById('franchiseForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

if (franchiseForm) {
    franchiseForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic form validation
        let isValid = true;
        const requiredFields = franchiseForm.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#DB2777';
                setTimeout(() => {
                    field.style.borderColor = 'transparent';
                }, 3000);
            }
        });

        if (!isValid) {
            showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        // Show loading state
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;

        try {
            // Send to Web3Forms
            const formData = new FormData(franchiseForm);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // Success!
                showMessage('Merci pour votre candidature ! Notre équipe vous recontactera sous 48h.', 'success');
                franchiseForm.reset();
            } else {
                // API error
                showMessage('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.', 'error');
                console.error('Web3Forms error:', result);
            }
        } catch (error) {
            // Network error
            showMessage('Erreur de connexion. Vérifiez votre connexion internet et réessayez.', 'error');
            console.error('Network error:', error);
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// Show form message (success or error)
function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for anchor links (not #)
        if (href !== '#') {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Close menu if open
                menuSidebar.classList.remove('active');
                document.body.style.overflow = '';

                // Smooth scroll to target
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
// ANIMATE ON SCROLL (Simple version)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate in
const animateElements = document.querySelectorAll('.accomp-card, .invest-item, .profil-card, .concept-highlight');

animateElements.forEach(el => {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    // Observe element
    observer.observe(el);
});

// ========================================
// FORM INPUT ENHANCEMENTS
// ========================================

const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    // Add focus animation
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// ========================================
// STATS COUNTER ANIMATION (Optional enhancement)
// ========================================

const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.textContent);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

// Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    if (!isNaN(parseInt(stat.textContent))) {
        statsObserver.observe(stat);
    }
});

// ========================================
// PREVENT ANIMATION ON PAGE LOAD
// ========================================

window.addEventListener('load', () => {
    // Small delay to ensure smooth initial render
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

console.log('Franchise page initialized successfully! 🍗');
