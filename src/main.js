import './style.css'

// Set launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

// Initialize the app
document.querySelector('#app').innerHTML = `
  <div class="logo-container">
    <h1 class="logo">NIKO FREE</h1>
  </div>
  
  <div class="content-card">
    <h2 class="heading">
      Your Next Event is <span class="gradient-text">Just a Click Away</span>
    </h2>
    
    <p class="description">
      We're building the future of event ticketing. Discover, book, and experience amazing events with ease. Get notified when we launch!
    </p>
    
    <!-- Countdown Timer -->
    <div class="countdown" id="countdown">
      <div class="countdown-item">
        <span class="countdown-value" id="days">00</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value" id="hours">00</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value" id="minutes">00</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value" id="seconds">00</span>
        <span class="countdown-label">Seconds</span>
      </div>
    </div>
    
    <!-- Email Form -->
    <form class="email-form" id="emailForm">
      <input 
        type="email" 
        class="email-input" 
        id="emailInput"
        placeholder="Enter your email address" 
        required
        aria-label="Email address"
      />
      <button type="submit" class="btn">
        Notify Me
      </button>
    </form>
    
    <div id="successMessage"></div>
    
    <!-- Features -->
    <div class="features">
      <div class="feature-item">
        <div class="feature-icon">🎫</div>
        <div class="feature-text">Easy Booking</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <div class="feature-text">Instant Access</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔒</div>
        <div class="feature-text">Secure Payments</div>
      </div>
    </div>
    
    <!-- Social Links -->
    <div class="social-links">
      <a href="#" class="social-link" aria-label="Twitter">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      <a href="#" class="social-link" aria-label="Facebook">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    </div>
  </div>
`;

// Countdown Timer Logic
function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate.getTime() - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<p class="description">We have launched! 🎉</p>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Email Form Handler
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;

  // Simulate email submission (in production, this would send to a backend)
  console.log('Email submitted:', email);

  // Show success message
  successMessage.innerHTML = `
    <div class="success-message">
      🎉 Thanks for signing up! We'll notify you at <strong>${email}</strong> when we launch.
    </div>
  `;

  // Clear the form
  emailInput.value = '';

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.innerHTML = '';
  }, 5000);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add particle effect on mouse move (optional enhancement)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Create floating particles
function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = '4px';
  particle.style.height = '4px';
  particle.style.borderRadius = '50%';
  particle.style.background = 'hsla(210, 100%, 55%, 0.6)';
  particle.style.pointerEvents = 'none';
  particle.style.left = mouseX + 'px';
  particle.style.top = mouseY + 'px';
  particle.style.zIndex = '9999';
  particle.style.transition = 'all 1s ease-out';

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0)`;
    particle.style.opacity = '0';
  }, 10);

  setTimeout(() => {
    particle.remove();
  }, 1000);
}

// Throttle particle creation
let lastParticleTime = 0;
document.addEventListener('mousemove', () => {
  const now = Date.now();
  if (now - lastParticleTime > 100) {
    createParticle();
    lastParticleTime = now;
  }
});
