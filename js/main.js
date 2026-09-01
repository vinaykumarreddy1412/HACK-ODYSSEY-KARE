/**
 * HACK ODYSSEY 4.0 - INTERACTIVE CORE LOGIC
 * Kalasalingam Academy of Research and Education | Euphoria 2026
 */

document.addEventListener('DOMContentLoaded', () => {
  initIntroSequence();
  initDynamicContent();
  initParticleNetwork();
  initCountdownTimer();
  initScrollObserver();
  initNavigation();
  initSmoothScroll();
  initInteractiveFx();
});

/* ==========================================================================
   1. OPENING / LOADING EXPERIENCE ("ENTERING THE ODYSSEY")
   ========================================================================== */
function initIntroSequence() {
  const introOverlay = document.getElementById('introOverlay');
  const skipBtn = document.getElementById('introSkipBtn');
  
  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function dismissIntro() {
    if (!introOverlay) return;
    introOverlay.classList.add('fade-out');
    setTimeout(() => {
      introOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 800);
  }

  if (prefersReducedMotion) {
    dismissIntro();
    return;
  }

  // Prevent scrolling during intro
  document.body.style.overflow = 'hidden';

  // Manual Skip Button
  if (skipBtn) {
    skipBtn.addEventListener('click', dismissIntro);
  }

  // Auto transition after 2.6 seconds
  setTimeout(dismissIntro, 2600);
}

/* ==========================================================================
   2. DYNAMIC CONTENT INJECTION FROM EVENT_CONFIG
   ========================================================================== */
function initDynamicContent() {
  const cfg = window.EVENT_CONFIG;
  if (!cfg) return;

  // Bind All Registration Links
  document.querySelectorAll('.js-register-link').forEach(el => {
    el.setAttribute('href', cfg.registrationUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Bind All WhatsApp Links
  document.querySelectorAll('.js-whatsapp-link').forEach(el => {
    el.setAttribute('href', cfg.whatsappUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Bind Map Iframe
  const mapIframe = document.getElementById('venueMapIframe');
  if (mapIframe && cfg.mapsEmbedUrl) {
    mapIframe.setAttribute('src', cfg.mapsEmbedUrl);
  }

  // Render Faculty Coordinators
  const facultyGrid = document.getElementById('facultyGrid');
  if (facultyGrid && cfg.facultyCoordinators) {
    facultyGrid.innerHTML = cfg.facultyCoordinators.map(fc => `
      <div class="coordinator-card reveal-on-scroll">
        <div class="coord-avatar-sm">${fc.initials || 'FC'}</div>
        <div class="coord-info">
          <span class="coord-name">${fc.name}</span>
          <span class="coord-role">${fc.designation} &bull; ${fc.role}</span>
        </div>
      </div>
    `).join('');
  }

  // Render Student Coordinators with Direct Phone Dialing
  // Render Student Coordinators with Direct Phone Dialing & WhatsApp Pretyped Chat
  const studentGrid = document.getElementById('studentGrid');
  if (studentGrid && cfg.studentCoordinators) {
    studentGrid.innerHTML = cfg.studentCoordinators.map(sc => `
      <div class="student-coord-card reveal-on-scroll">
        <div class="student-top-info" style="margin-bottom: 1.25rem;">
          <div class="student-avatar">${sc.initials || 'SC'}</div>
          <div>
            <span class="student-label">${sc.role || 'Student Coordinator'}</span>
            <h4 class="student-name">${sc.name}</h4>
          </div>
        </div>
        <div class="student-actions-flex">
          <a href="tel:${sc.phoneClean || sc.phone.replace(/[^0-9+]/g, '')}" class="btn-call-coordinator" aria-label="Call ${sc.name}">
            <i class="fa-solid fa-phone"></i>
            <span>CALL</span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=${sc.phoneClean || sc.phone.replace(/[^0-9]/g, '')}&text=Hi%20${encodeURIComponent(sc.name)},%20I%20have%20a%20query%20regarding%20Hack%20Odyssey%204.0" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-coordinator" aria-label="WhatsApp ${sc.name}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 0.35rem;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>WHATSAPP</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  // Render SDG Cards
  const sdgGrid = document.getElementById('sdgGrid');
  if (sdgGrid && cfg.sdgs) {
    sdgGrid.innerHTML = cfg.sdgs.map(sdg => `
      <div class="sdg-card reveal-on-scroll" style="--sdg-theme: ${sdg.color};">
        <div class="sdg-card-top">
          <div class="sdg-logo-wrap">
            <img src="${sdg.logoPath}" alt="${sdg.badge} Official Logo" class="sdg-logo-img" loading="lazy">
          </div>
          <span class="sdg-large-num" style="color: ${sdg.color};">${sdg.number}</span>
        </div>
        <h4 class="sdg-card-title">${sdg.title}</h4>
        <p class="sdg-card-desc">${sdg.description}</p>
        <div class="sdg-bottom-bar" style="background: linear-gradient(90deg, ${sdg.color}, transparent);"></div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   3. BRIGHT AI NEURAL PARTICLE CANVAS
   ========================================================================== */
function initParticleNetwork() {
  const canvas = document.getElementById('aiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let animationFrameId;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2 + 1.2;
      const palette = [
        'rgba(6, 182, 212, ',   // Cyan
        'rgba(37, 99, 235, ',   // Blue
        'rgba(147, 51, 234, ',  // Purple
        'rgba(236, 72, 153, ',  // Pink / Magenta
        'rgba(245, 158, 11, ',  // Gold / Amber
        'rgba(16, 185, 129, '   // Emerald
      ];
      this.color = palette[Math.floor(Math.random() * palette.length)];
      this.alpha = Math.random() * 0.45 + 0.25;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Connect close particles with delicate glowing lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const lineAlpha = (1 - dist / 130) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  // Resize handler
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

/* ==========================================================================
   4. EVENT COUNTDOWN TIMER
   ========================================================================== */
function initCountdownTimer() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMins');
  const secsEl = document.getElementById('countSecs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date(window.EVENT_CONFIG?.startDate || '2026-09-25T09:00:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. INTERSECTION OBSERVER SCROLL REVEALS
   ========================================================================== */
function initScrollObserver() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const navbarWrapper = document.getElementById('navbarWrapper');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerClose = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-nav-links a');

  // Sticky navbar shadow change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbarWrapper.classList.add('navbar-scrolled');
    } else {
      navbarWrapper.classList.remove('navbar-scrolled');
    }
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   7. SMOOTH SCROLL & BACK TO TOP
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  const backToTop = document.getElementById('backToTopBtn');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   8. INTERACTIVE GOLDEN CURSOR SPOTLIGHT & 3D CARD TILTS
   ========================================================================== */
function initInteractiveFx() {
  if (window.innerWidth > 992) {
    const spotlight = document.createElement('div');
    spotlight.className = 'cursor-glass-spotlight';
    document.body.appendChild(spotlight);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateSpotlight() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      spotlight.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      requestAnimationFrame(animateSpotlight);
    }
    animateSpotlight();

    // 3D Card Tilt Interaction
    document.querySelectorAll('.prize-hero-card, .sdg-card, .stat-card-glass, .convenor-card, .about-feature-box').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
}
