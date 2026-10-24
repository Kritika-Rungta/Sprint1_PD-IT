/**
 * Prodesk IT - Digital Marketing Wing (Sprint 1)
 * Vanilla JavaScript for Mobile Navigation, Theme Toggle, and Scroll Interactions
 * Adheres to standard accessibility guidelines and plain JS requirements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('primary-navigation');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const themeToggle = document.getElementById('theme-toggle');

  /**
   * 1. Dark / Light Theme Toggle (Prompt 13)
   * Toggles [data-theme="dark"] on <html> and remembers the user's preference in localStorage.
   */
  if (themeToggle) {
    const root = document.documentElement;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('prodesk_theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
        themeToggle.setAttribute('title', 'Switch to light theme');
      } else {
        root.removeAttribute('data-theme');
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
        themeToggle.setAttribute('title', 'Switch to dark theme');
      }
    };

    // Initialize theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }

    // Toggle on click
    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('prodesk_theme', newTheme);
    });
  }

  /**
   * 2. Mobile Menu Toggle (Prompt 11)
   * Controls opening and closing the mobile drawer and updates ARIA states.
   */
  if (menuToggle && navMenu) {
    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      menuToggle.setAttribute('aria-expanded', String(newState));
      menuToggle.classList.toggle('active', newState);
      navMenu.classList.toggle('active', newState);

      if (newState) {
        navMenu.classList.remove('hidden');
        navMenu.classList.add('flex');
      } else {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex');
      }
    };

    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navMenu.classList.add('hidden');
      navMenu.classList.remove('flex');
    };

    // Click on hamburger button
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking on any navigation link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu when clicking anywhere outside of navbar
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Close menu when pressing the Escape key (Keyboard accessibility)
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Reset mobile menu when viewport expands to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  /**
   * 3. Active Link Highlighting on Scroll (Scroll-spy)
   * Tracks visible section in viewport and updates the .active class on nav links.
   */
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSectionId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
});
