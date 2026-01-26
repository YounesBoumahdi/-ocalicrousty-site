// ========================================
// MENU SIDEBAR - Crousty One Style
// ========================================

const hamburger = document.getElementById('hamburger');
const menuSidebar = document.getElementById('menuSidebar');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Ouvrir le menu sidebar
hamburger.addEventListener('click', () => {
    menuSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Fermer le menu sidebar
function closeSidebar() {
    menuSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

menuClose.addEventListener('click', closeSidebar);
menuOverlay.addEventListener('click', closeSidebar);

// Fermer au clic sur un lien
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// Fermer avec Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuSidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// ========================================
// NAVBAR SCROLL EFFECT - Hide on scroll down, show on scroll up (Optimisé)
// ========================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
let scrollThreshold = 100;
let navbarTicking = false;

function updateNavbar() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'translate3d(0, -100%, 0)';
        } else {
            navbar.style.transform = 'translate3d(0, 0, 0)';
        }
    } else {
        navbar.style.transform = 'translate3d(0, 0, 0)';
    }

    lastScrollTop = scrollTop;
    navbarTicking = false;
}

window.addEventListener('scroll', () => {
    if (!navbarTicking) {
        window.requestAnimationFrame(updateNavbar);
        navbarTicking = true;
    }
}, { passive: true });

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Hauteur de la navbar
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SWIPER CAROUSEL - Like Crousty One
// ========================================

// Initialize Swiper with auto-slide animation
let menuSwiper;

function activateSwiperWhenReady() {
    menuSwiper = new Swiper('.menuSwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            968: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Animation initiale comme Crousty One
    setTimeout(() => {
        menuSwiper.slideNext(0);
        setTimeout(() => {
            menuSwiper.slidePrev(300);
        }, 100);
    }, 800);
}

// Attendre le chargement
if ('requestIdleCallback' in window) {
    requestIdleCallback(activateSwiperWhenReady);
} else {
    setTimeout(activateSwiperWhenReady, 800);
}

// ========================================
// MODAL MENU COMPLET
// ========================================

const menuModal = document.getElementById('menuModal');
const btnMenuComplet = document.getElementById('btnMenuComplet');
const btnCommanderModal = document.getElementById('btnCommanderModal');

// Ouvrir le modal (si le bouton existe)
if (btnMenuComplet) {
    btnMenuComplet.addEventListener('click', () => {
        menuModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Fermer le modal
function closeModal() {
    if (menuModal) {
        menuModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

if (menuModal) {
    const modalCloseBtn = menuModal.querySelector('.modal-close');
    const modalOverlayDiv = menuModal.querySelector('.modal-overlay');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlayDiv) modalOverlayDiv.addEventListener('click', closeModal);
}

// ========================================
// TABS NAVIGATION
// ========================================

const tabBtns = document.querySelectorAll('.tab-btn');
const menuCategories = document.querySelectorAll('.menu-category');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetCategory = btn.dataset.category;

        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active category
        menuCategories.forEach(cat => cat.classList.remove('active'));
        document.getElementById(targetCategory).classList.add('active');
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Animation du panda dans la section franchise
const pandaSticker = document.querySelector('.sticker-panda-franchise');
if (pandaSticker) {
    observer.observe(pandaSticker);
}

// Éléments à animer (menu-card, restaurant-card)
const animatedElements = document.querySelectorAll('.menu-card, .restaurant-card');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cardObserver.observe(el);
});

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message envoyé ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}

// ========================================
// BOUTON COMMANDER - UBER EATS
// ========================================

const btnCommander = document.querySelector('.btn-commander');
const uberEatsLink = 'https://www.ubereats.com/fr-en/store/ocali-crousty-saint-brieuc/6QjbHzcNWsK3RbNxsROxnQ';

if (btnCommander) {
    btnCommander.addEventListener('click', () => {
        window.open(uberEatsLink, '_blank');
    });
}

if (btnCommanderModal) {
    btnCommanderModal.addEventListener('click', () => {
        window.open(uberEatsLink, '_blank');
        closeModal();
    });
}

// ========================================
// PARALLAX HERO - Optimisé avec requestAnimationFrame
// ========================================

let ticking = false;
let lastScrollY = 0;

function updateParallax() {
    const scrolled = lastScrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
        if (heroImage) {
            heroImage.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
        }
    }

    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.pageYOffset;

    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ========================================
// LOADING ANIMATION & PAGE VISIBILITY
// ========================================

window.addEventListener('load', () => {
    // Smooth fade in
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';

    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });

    // Si on arrive sur la page avec un hash, scroll vers la section
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const offset = 100;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 300);
    }
});

// ========================================
// AMÉLIORATION VISIBILITÉ - S'assurer que le contenu est visible
// ========================================

// Vérifier si un élément est dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

// Animation d'entrée pour les sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
    if (!section.classList.contains('hero')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    }
});

// ========================================
// BOUTON RETOUR EN HAUT
// ========================================

const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Retour en haut au clic
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

console.log('🍗 Ocalicrousty - Site chargé avec succès !');
