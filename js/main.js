/**
 * =============================================================================
 * RAHUL DHAMECHA - PORTFOLIO INTERACTIVITY (Vanilla JavaScript)
 * =============================================================================
 * Handles:
 * 1. Dark/Light theme toggle with persistent localStorage & OS preference detection
 * 2. Mobile navigation drawer open/close
 * 3. Copy email address to clipboard with accessible toast notification
 * 4. Active navbar link tracking on scroll (IntersectionObserver)
 * =============================================================================
 */

(function () {
  'use strict';

  // --- 1. THEME TOGGLE (Light / Dark Mode) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        themeToggleBtn.setAttribute('title', 'Switch to light mode');
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        themeToggleBtn.setAttribute('title', 'Switch to dark mode');
      }
    }
  }

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // Listen for OS theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // --- 2. MOBILE NAVIGATION DRAWER ---
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.add('open');
      mobileToggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when a navigation link is clicked
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
        if (mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          mobileToggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // --- 3. COPY EMAIL TO CLIPBOARD WITH TOAST ---
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toastNotice = document.getElementById('toast-notice');
  const EMAIL_ADDRESS = 'rahuldhamecha4260@gmail.com';
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-text').textContent = message;
    toastNotice.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastNotice.classList.remove('show');
    }, 3000);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async function () {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(EMAIL_ADDRESS);
          showToast('Email address copied to clipboard!');
        } else {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = EMAIL_ADDRESS;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast('Email address copied to clipboard!');
        }
      } catch (err) {
        window.location.href = 'mailto:' + EMAIL_ADDRESS;
      }
    });
  }

  // --- 4. ACTIVE NAVBAR LINK HIGHLIGHTING ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              const href = link.getAttribute('href');
              if (href === '#' + id) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }
})();

