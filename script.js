/**
 * Madhu Shree - Developer Portfolio
 * Vanilla JavaScript (ES6+)
 * Features: Dark/Light Mode, Mobile Navigation, Scroll Spy, Contact Form Validation, Accessible Modal Dialog
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. THEME TOGGLE (DARK / LIGHT MODE)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve user theme preference from localStorage or fallback to dark
  const savedTheme = localStorage.getItem('madhu-portfolio-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Apply initial theme
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersLight) {
    htmlRoot.setAttribute('data-theme', 'light');
  } else {
    htmlRoot.setAttribute('data-theme', 'dark');
  }

  // Handle click on theme toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

      htmlRoot.setAttribute('data-theme', targetTheme);
      localStorage.setItem('madhu-portfolio-theme', targetTheme);

      // Accessibility announcement
      themeToggleBtn.setAttribute(
        'aria-label',
        `Switch to ${currentTheme === 'light' ? 'light' : 'dark'} theme`
      );
    });
  }

  // =========================================================================
  // 2. MOBILE HAMBURGER MENU NAVIGATION
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileMenu() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-active');
  }

  function closeMobileMenu() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-active');
  }

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('is-active') &&
        !navMenu.contains(event.target) &&
        !hamburgerBtn.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    // Close menu when Escape key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
        closeMobileMenu();
      }
    });
  }

  // =========================================================================
  // 3. NAVBAR SCROLL EFFECT & ACTIVE LINK SCROLL SPY
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy: highlight current section in navigation
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // =========================================================================
  // 4. MODAL DIALOG CONTROLLER (REUSABLE POPUP)
  // =========================================================================
  const modal = document.getElementById('info-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalActionBtn = document.getElementById('modal-action-btn');

  function openModal(title, htmlContent) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = htmlContent;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalActionBtn) modalActionBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // =========================================================================
  // 5. RESUME ACTIONS (DOWNLOAD FALLBACK & RESUME OVERVIEW)
  // =========================================================================
  const previewResumeBtn = document.getElementById('preview-resume-btn');
  const downloadResumeBtn = document.getElementById('download-resume-btn');

  if (previewResumeBtn) {
    previewResumeBtn.addEventListener('click', () => {
      const resumeHtml = `
        <div style="line-height: 1.6;">
          <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem; font-size: 1.1rem;">Madhu Shree</h4>
          <p style="font-size: 0.9rem; margin-bottom: 1rem;">
            <strong>Objective:</strong> Aspiring Full Stack Web Developer seeking an internship or entry-level role.
          </p>
          <hr style="border: 0; border-top: 1px solid var(--border-color); margin-bottom: 1rem;">
          
          <h5 style="color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">Education</h5>
          <p style="font-size: 0.88rem; margin-bottom: 0.75rem;">
            &bull; <strong>MCA (Master of Computer Applications)</strong> &mdash; In Progress<br>
            &bull; Bachelor's Degree &mdash; Completed
          </p>

          <h5 style="color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">Technical Skills</h5>
          <p style="font-size: 0.88rem; margin-bottom: 0.75rem;">
            &bull; Front-End: HTML5, CSS3, JavaScript (beginner/intermediate)<br>
            &bull; Back-End & Database: PHP, MySQL, phpMyAdmin<br>
            &bull; Tools: Git, GitHub, VS Code, XAMPP
          </p>

          <h5 style="color: var(--text-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">Key Project</h5>
          <p style="font-size: 0.88rem; margin-bottom: 1rem;">
            &bull; <strong>Staff Automation System:</strong> Web portal built with PHP and MySQL to manage employee records with full CRUD operations.
          </p>

          <div style="background-color: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.825rem;">
            <strong>Quick Setup Tip:</strong> Place your PDF file in <code>assets/Madhu_Shree_Resume.pdf</code> to allow one-click PDF downloading!
          </div>
        </div>
      `;
      openModal('Resume Quick Overview', resumeHtml);
    });
  }

  // Gracefully verify resume download link
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (event) => {
      // Check if file is available using a HEAD fetch
      fetch('assets/Madhu_Shree_Resume.pdf', { method: 'HEAD' })
        .then((response) => {
          if (!response.ok) {
            event.preventDefault();
            const message = `
              <p>Your resume link is ready! To make your PDF resume downloadable:</p>
              <ol style="margin-left: 1.25rem; margin-top: 0.5rem; font-size: 0.9rem; line-height: 1.7;">
                <li>Create or export your resume as a <strong>PDF</strong> document.</li>
                <li>Name it <code>Madhu_Shree_Resume.pdf</code>.</li>
                <li>Place it in the <code>assets/</code> folder in this project folder.</li>
              </ol>
              <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--accent-primary);">
                In the meantime, you can review the <strong>Resume Overview</strong> button for an instant summary!
              </p>
            `;
            openModal('Resume PDF File Notice', message);
          }
        })
        .catch(() => {
          // If running locally via file:// protocol where fetch may be restricted, let default link action proceed
        });
    });
  }

  // =========================================================================
  // 6. PROJECT DEMO STATUS POPUP
  // =========================================================================
  const demoStatusBtn = document.getElementById('demo-status-btn');
  if (demoStatusBtn) {
    demoStatusBtn.addEventListener('click', () => {
      const demoHtml = `
        <p style="margin-bottom: 0.75rem;">
          <strong>Staff Automation System</strong> is a full-stack database application developed locally using 
          <strong>PHP</strong> and <strong>MySQL</strong>.
        </p>
        <p style="margin-bottom: 0.75rem; font-size: 0.9rem;">
          Because PHP and MySQL require a server runtime (such as Apache & MySQL on XAMPP, or a PHP-capable cloud host), 
          it is not currently hosted as a static site.
        </p>
        <div style="background-color: var(--bg-secondary); padding: 0.85rem; border-radius: 8px; border: 1px solid var(--border-color); font-size: 0.85rem; margin-bottom: 0.75rem;">
          <strong>How to test locally:</strong>
          <ol style="margin-left: 1.2rem; margin-top: 0.4rem; line-height: 1.6;">
            <li>Install XAMPP / WampServer.</li>
            <li>Place project files in <code>htdocs/staff-automation</code>.</li>
            <li>Import the MySQL database script via <code>phpMyAdmin</code>.</li>
            <li>Launch <code>http://localhost/staff-automation</code> in your browser!</li>
          </ol>
        </div>
        <p style="font-size: 0.85rem; color: var(--accent-primary);">
          A live cloud demo or video walkthrough is planned and will be added here soon!
        </p>
      `;
      openModal('Project Status: Local PHP/MySQL Application', demoHtml);
    });
  }

  // =========================================================================
  // 7. CONTACT FORM VALIDATION & HANDLING
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Helper validation functions
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  function clearErrors() {
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (input) input.classList.remove('is-invalid');
    });
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';
    if (formAlert) {
      formAlert.style.display = 'none';
      formAlert.className = 'form-alert';
      formAlert.textContent = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors();

      let isValid = true;

      // Validate Name
      const nameValue = nameInput ? nameInput.value.trim() : '';
      if (!nameValue) {
        isValid = false;
        if (nameInput) nameInput.classList.add('is-invalid');
        if (nameError) nameError.textContent = 'Please enter your name.';
      } else if (nameValue.length < 2) {
        isValid = false;
        if (nameInput) nameInput.classList.add('is-invalid');
        if (nameError) nameError.textContent = 'Name must be at least 2 characters.';
      }

      // Validate Email
      const emailValue = emailInput ? emailInput.value.trim() : '';
      if (!emailValue) {
        isValid = false;
        if (emailInput) emailInput.classList.add('is-invalid');
        if (emailError) emailError.textContent = 'Please enter your email address.';
      } else if (!validateEmail(emailValue)) {
        isValid = false;
        if (emailInput) emailInput.classList.add('is-invalid');
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
      }

      // Validate Message
      const messageValue = messageInput ? messageInput.value.trim() : '';
      if (!messageValue) {
        isValid = false;
        if (messageInput) messageInput.classList.add('is-invalid');
        if (messageError) messageError.textContent = 'Please enter your message.';
      } else if (messageValue.length < 10) {
        isValid = false;
        if (messageInput) messageInput.classList.add('is-invalid');
        if (messageError) messageError.textContent = 'Message must be at least 10 characters.';
      }

      if (isValid) {
        // Show success alert
        if (formAlert) {
          formAlert.style.display = 'block';
          formAlert.className = 'form-alert success';
          formAlert.innerHTML = `
            <strong>Thank you, ${nameValue}!</strong> Your message has been received. 
            I will get back to you at <em>${emailValue}</em> as soon as possible.
          `;
        }

        // Reset the form fields
        contactForm.reset();

        // Smooth scroll alert into view if needed
        formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        if (formAlert) {
          formAlert.style.display = 'block';
          formAlert.className = 'form-alert error';
          formAlert.textContent = 'Please correct the highlighted fields before submitting.';
        }
      }
    });

    // Clear field-specific error on user input
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          if (input.classList.contains('is-invalid')) {
            input.classList.remove('is-invalid');
            const errorElement = document.getElementById(`${input.name}-error`);
            if (errorElement) errorElement.textContent = '';
          }
        });
      }
    });
  }

  // =========================================================================
  // 8. DYNAMIC CURRENT YEAR IN FOOTER
  // =========================================================================
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
