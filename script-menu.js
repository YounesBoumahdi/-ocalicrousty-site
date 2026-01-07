// ========================================
// MENU SIDEBAR
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
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;
let scrollThreshold = 100;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Scroll down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        // Top of page - show navbar
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

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

console.log('🍗 Menu Ocalicrousty chargé !');
