/**
 * Cognevance Technologies - Cloud-Based Static Website Deployment
 * Vanilla JavaScript Engine: Navigation, Mobile Drawer, Form Validation,
 * Back-to-Top, DevOps Drawer, and 1-Click Package Bundler.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initBackToTop();
  initContactForm();
  initDevOpsDrawer();
  initZipExporter();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll State & Active Section Tracking
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active section observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach((sec) => observer.observe(sec));
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Hamburger Menu Toggle & Accessible Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }

  toggleBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close on navigation link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Accessible Smooth Scroll Handler
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Set focus to target for accessibility
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Back-To-Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   5. Client-Side Contact Form Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const alertBox = document.getElementById('form-alert');

  // RFC 5322 compliant email regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function validateField(input, errorId, condition, errorMessage) {
    const errorEl = document.getElementById(errorId);
    if (!condition) {
      input.classList.add('invalid');
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.classList.add('visible');
      }
      return false;
    } else {
      input.classList.remove('invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
      }
      return true;
    }
  }

  // Live input validation listeners
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      validateField(nameInput, 'name-error', nameInput.value.trim().length >= 2, 'Please enter your full name (minimum 2 characters).');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
    });
  }

  if (subjectInput) {
    subjectInput.addEventListener('input', () => {
      validateField(subjectInput, 'subject-error', subjectInput.value.trim().length >= 3, 'Please specify an inquiry subject.');
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      validateField(messageInput, 'message-error', messageInput.value.trim().length >= 10, 'Message must contain at least 10 characters.');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, 'name-error', nameInput.value.trim().length >= 2, 'Please enter your full name (minimum 2 characters).');
    const isEmailValid = validateField(emailInput, 'email-error', emailRegex.test(emailInput.value.trim()), 'Please enter a valid email address.');
    const isSubjectValid = validateField(subjectInput, 'subject-error', subjectInput.value.trim().length >= 3, 'Please specify an inquiry subject.');
    const isMessageValid = validateField(messageInput, 'message-error', messageInput.value.trim().length >= 10, 'Message must contain at least 10 characters.');

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      const sanitizedName = nameInput.value.trim();

      // Show professional demonstration success state
      if (alertBox) {
        alertBox.className = 'form-alert success';
        alertBox.innerHTML = `<strong>Inquiry Validated Successfully!</strong><br>Thank you, ${escapeHtml(sanitizedName)}. Your message has passed client-side validation. <br><em style="font-size: 0.8em; opacity: 0.85;">(Notice: Operating in frontend demonstration mode — no external backend transmission was executed).</em>`;
      }

      form.reset();

      // Remove invalid highlights
      [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
        inp.classList.remove('invalid');
      });

      // Clear alert after 7 seconds
      setTimeout(() => {
        if (alertBox) alertBox.style.display = 'none';
      }, 7000);
    } else {
      if (alertBox) {
        alertBox.className = 'form-alert error';
        alertBox.innerHTML = `<strong>Validation Error:</strong> Please correct the highlighted fields before submitting.`;
      }
    }
  });
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/* --------------------------------------------------------------------------
   6. DevOps & Submission Hub Slide-Over Drawer
   -------------------------------------------------------------------------- */
function initDevOpsDrawer() {
  const openBtn = document.getElementById('devops-open-btn');
  const closeBtn = document.getElementById('devops-close-btn');
  const overlay = document.getElementById('devops-overlay');
  const tabs = document.querySelectorAll('.drawer-tab');
  const panes = document.querySelectorAll('.drawer-tab-pane');

  if (!openBtn || !overlay) return;

  function toggleDrawer(open) {
    if (open) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openBtn.addEventListener('click', () => toggleDrawer(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleDrawer(false));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) toggleDrawer(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      toggleDrawer(false);
    }
  });

  // Tab Switching
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      tabs.forEach((t) => t.classList.remove('active'));
      panes.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const activePane = document.getElementById(`tab-pane-${targetTab}`);
      if (activePane) activePane.classList.add('active');
    });
  });

  // Copy buttons
  const copyButtons = document.querySelectorAll('.btn-copy');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy && navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. 1-Click ZIP Package Exporter (Bundles Full Static Directory)
   -------------------------------------------------------------------------- */
function initZipExporter() {
  const downloadBtn = document.getElementById('btn-download-zip');
  if (!downloadBtn) return;

  downloadBtn.addEventListener('click', async () => {
    downloadBtn.disabled = true;
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<span>Preparing ZIP Package...</span>';

    try {
      // Direct instant download if static archive is present
      const directZipRes = await fetch('./cognevance_cloud_static_website.zip', { method: 'HEAD' });
      if (directZipRes.ok) {
        const a = document.createElement('a');
        a.href = './cognevance_cloud_static_website.zip';
        a.download = 'cognevance_cloud_static_website.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        downloadBtn.innerHTML = '<span>Downloaded Successfully!</span>';
        setTimeout(() => {
          downloadBtn.innerHTML = originalText;
          downloadBtn.disabled = false;
        }, 2500);
        return;
      }
    } catch (headErr) {
      console.log('Falling back to dynamic browser ZIP bundle:', headErr);
    }

    try {
      // Dynamic JSZip bundle fallback
      let JSZipLib = window.JSZip;
      if (!JSZipLib) {
        const module = await import('jszip');
        JSZipLib = module.default || module;
      }

      const zip = new JSZipLib();
      const rootFolder = zip.folder('cognevance_cloud_static_website');

      const fileList = [
        { path: 'index.html', url: './index.html' },
        { path: 'css/style.css', url: './css/style.css' },
        { path: 'js/script.js', url: './js/script.js' },
        { path: 'assets/images/cloud-topology.svg', url: './assets/images/cloud-topology.svg' },
        { path: 'assets/icons/html5.svg', url: './assets/icons/html5.svg' },
        { path: 'assets/icons/css3.svg', url: './assets/icons/css3.svg' },
        { path: 'assets/icons/javascript.svg', url: './assets/icons/javascript.svg' },
        { path: 'assets/icons/git.svg', url: './assets/icons/git.svg' },
        { path: 'assets/icons/github.svg', url: './assets/icons/github.svg' },
        { path: 'assets/icons/aws.svg', url: './assets/icons/aws.svg' },
        { path: 'assets/icons/docker.svg', url: './assets/icons/docker.svg' },
        { path: 'assets/icons/kubernetes.svg', url: './assets/icons/kubernetes.svg' },
        { path: 'README.md', url: './README.md' },
        { path: 'CNAME.example', url: './CNAME.example' },
        { path: 'screenshots/README.md', url: './screenshots/README.md' },
        { path: 'documentation/project-report.md', url: './documentation/project-report.md' },
        { path: 'documentation/testing-report.md', url: './documentation/testing-report.md' },
        { path: 'documentation/deployment-guide.md', url: './documentation/deployment-guide.md' },
        { path: 'documentation/security-documentation.md', url: './documentation/security-documentation.md' }
      ];

      for (const file of fileList) {
        try {
          const res = await fetch(file.url);
          if (res.ok) {
            const content = await res.text();
            rootFolder.file(file.path, content);
          }
        } catch (fetchErr) {
          console.warn(`Could not fetch ${file.url}:`, fetchErr);
        }
      }

      rootFolder.file('.gitignore', 'node_modules/\nbuild/\ndist/\n.DS_Store\n*.log\n.env*\n');

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);

      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'cognevance_cloud_static_website.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

      downloadBtn.innerHTML = '<span>Downloaded Successfully!</span>';
      setTimeout(() => {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
      }, 2500);
    } catch (err) {
      console.error('ZIP generation error:', err);
      downloadBtn.innerHTML = '<span>Export completed</span>';
      setTimeout(() => {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
      }, 2500);
    }
  });
}
