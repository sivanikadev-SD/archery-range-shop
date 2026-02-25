// Main JavaScript - Archery Range Template

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initMobileMenu();
    initLucide();
    initAOS();
});

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }
}

/* =========================================
   1. Theme Management (Dark/Light)
   ========================================= */
function initTheme() {
    // Select ALL theme toggle buttons (desktop + mobile)
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    const html = document.documentElement;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Ensure icons are correct on load
    updateThemeIcons(html.classList.contains('dark'));

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Update all buttons' state
            updateThemeIcons(isDark);
        });
    });
}

function updateThemeIcons(isDark) {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        const sunIcon = btn.querySelector('[data-lucide="sun"]');
        const moonIcon = btn.querySelector('[data-lucide="moon"]');

        if (isDark) {
            if (sunIcon) sunIcon.classList.add('hidden');
            if (moonIcon) moonIcon.classList.remove('hidden');
        } else {
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
        }
    });
    // Re-init icons to ensure they render if replaced
    if (window.lucide) lucide.createIcons();
}

/* =========================================
   2. Direction Management (RTL/LTR)
   ========================================= */
function initDirection() {
    // Select ALL direction toggle buttons
    const dirToggleBtns = document.querySelectorAll('.dir-toggle-btn');
    const html = document.documentElement;

    // Check saved preference
    const savedDir = localStorage.getItem('dir') || 'ltr';
    html.setAttribute('dir', savedDir);

    // Initial update
    updateAllDirButtons(savedDir);

    dirToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';

            html.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);

            updateAllDirButtons(newDir);
        });
    });
}

function updateAllDirButtons(dir) {
    const dirToggleBtns = document.querySelectorAll('.dir-toggle-btn');
    dirToggleBtns.forEach(btn => {
        if (btn.querySelector('.dir-text')) {
            btn.querySelector('.dir-text').textContent = dir === 'ltr' ? 'RTL' : 'LTR';
        } else {
            // Fallback if no specific span
            btn.textContent = dir === 'ltr' ? 'LTR' : 'RTL';
        }
    });
}

/* =========================================
   3. Mobile Menu
   ========================================= */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu-btn');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }
}

/* =========================================
   4. Icon Initialization (Lucide)
   ========================================= */
function initLucide() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

/* Helper to update icons after state changes if needed */
function updateIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}
