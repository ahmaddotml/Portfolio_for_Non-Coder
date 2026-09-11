/* ================================================
   DARK THEME DATA SCIENTIST PORTFOLIO — script.js
   ================================================ */

'use strict';

/* ---------- 1. DOM READY HELPERS ---------- */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

document.addEventListener('DOMContentLoaded', () => {
  initConfig();
  initNavbar();
  initScrolledNav();
  initMobileMenu();
  initSmoothScroll();
  initScrollSpy();
  initActiveLink();
  initRevealOnScroll();
  initSkillBars();
  initContactForm();
});

/* ---------- 2. CONFIG INITIALIZATION ---------- */
function initConfig() {
  if (typeof PORTFOLIO_CONFIG === 'undefined') return;

  // Set profile image from config
  if (PORTFOLIO_CONFIG.personal && PORTFOLIO_CONFIG.personal.image) {
    $$('img[alt="Profile Photo"], img[alt="About Photo"]').forEach((img) => {
      img.src = PORTFOLIO_CONFIG.personal.image;
    });
  }

  // Populate skills grid from config
  const skillsGrid = $('.skills-grid');
  if (skillsGrid && PORTFOLIO_CONFIG.skills) {
    skillsGrid.innerHTML = PORTFOLIO_CONFIG.skills.map((skill) => `
      <div class="skill-card">
        <div class="skill-head">
          <div class="skill-icon">
            <i class="${skill.icon}"></i>
          </div>
          <div class="skill-meta">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-cat">${skill.category}</span>
          </div>
        </div>
        <div class="skill-bar-row">
          <div class="skill-bar">
            <div class="skill-progress" data-progress="${skill.progress}"></div>
          </div>
          <span class="skill-percent">${skill.progress}%</span>
        </div>
      </div>
    `).join('');
  }

  // Populate text content from data-config attributes
  $$('[data-config]').forEach((el) => {
    const path = el.getAttribute('data-config');
    if (!path) return;

    const value = path.split('.').reduce((obj, key) => obj && obj[key], PORTFOLIO_CONFIG);
    if (value && !el.querySelector('[data-config]')) {
      if (typeof value === 'string') {
        el.innerHTML = value;
      }
    }
  });

  // Populate social links
  if (PORTFOLIO_CONFIG.social) {
    $$('[data-config="social"]').forEach((container) => {
      const links = container.querySelectorAll('a');
      const social = PORTFOLIO_CONFIG.social;
      if (links[0] && social.github) links[0].href = social.github;
      if (links[1] && social.linkedin) links[1].href = social.linkedin;
      if (links[2] && social.twitter) links[2].href = social.twitter;
    });
  }

  // Populate about paragraphs
  if (PORTFOLIO_CONFIG.about && PORTFOLIO_CONFIG.about.paragraphs) {
    const paragraphsContainer = $('[data-config="about.paragraphs"]');
    if (paragraphsContainer) {
      paragraphsContainer.innerHTML = PORTFOLIO_CONFIG.about.paragraphs
        .map((p) => `<p>${p}</p>`)
        .join('');
    }
  }

  // Populate about stats
  if (PORTFOLIO_CONFIG.about && PORTFOLIO_CONFIG.about.stats) {
    const statsContainer = $('[data-config="about.stats"]');
    if (statsContainer) {
      statsContainer.innerHTML = PORTFOLIO_CONFIG.about.stats
        .map((stat) => `
          <div class="stat-item">
            <span class="stat-number">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
          </div>
        `)
        .join('');
    }
  }
}

/* ---------- 3. NAVBAR ---------- */
function initNavbar() {
  // Placeholder for any future navbar initialization
  // Currently handled by initScrolledNav and initMobileMenu
}

/* ---------- 3. SOLID BG ON SCROLL ---------- */
function initScrolledNav() {
  const navbar = $('#navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- 4. MOBILE HAMBURGER MENU ---------- */
function initMobileMenu() {
  const toggle = $('#navToggle');
  const menu = $('#navMenu');
  const backdrop = $('#navBackdrop');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active', isOpen);
    if (backdrop) backdrop.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close when clicking the backdrop */
  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  $$('.nav-link', menu).forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ---------- 5. SMOOTH SCROLL (with offset) ---------- */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;

      const target = $(targetId);
      if (!target) return;

      e.preventDefault();
      const headerOffset = 70;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ---------- 6. SCROLL SPY — highlight active nav link ---------- */
function initScrollSpy() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;
    let currentId = '';

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- 7. ACTIVE LINK INIT (Home by default) ---------- */
function initActiveLink() {
  if (window.scrollY < 100) {
    $$('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#hero');
    });
  }
}

/* ---------- 8. REVEAL ON SCROLL ---------- */
function initRevealOnScroll() {
  const reveals = $$('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach((el) => observer.observe(el));
}

/* ---------- 9. SKILL BAR ANIMATION ---------- */
function initSkillBars() {
  const bars = $$('.skill-progress');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const progress = bar.getAttribute('data-progress');
        if (progress) {
          bar.style.width = progress + '%';
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach((bar) => observer.observe(bar));
}

/* ---------- 10. CONTACT FORM HANDLER ---------- */
function initContactForm() {
  const form = $('#contactForm');
  const successMsg = $('#formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    $$('.form-error', form).forEach((el) => { el.textContent = ''; });

    // Validate
    let isValid = true;
    const name = $('#name', form);
    const email = $('#email', form);
    const message = $('#message', form);

    if (name && name.value.trim().length < 2) {
      const err = name.parentElement.querySelector('.form-error');
      if (err) err.textContent = 'Please enter your name.';
      isValid = false;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      const err = email.parentElement.querySelector('.form-error');
      if (err) err.textContent = 'Please enter a valid email.';
      isValid = false;
    }

    if (message && message.value.trim().length < 5) {
      const err = message.parentElement.querySelector('.form-error');
      if (err) err.textContent = 'Please enter a message (at least 5 characters).';
      isValid = false;
    }

    if (!isValid) return;

    // Demo: show success message
    form.reset();
    if (successMsg) {
      successMsg.classList.add('show');
      setTimeout(() => successMsg.classList.remove('show'), 5000);
    }
  });
}