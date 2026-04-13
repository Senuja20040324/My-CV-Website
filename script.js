// =============================================
//  CV WEBSITE — script.js
// =============================================


// --- 1. Fade-in on scroll ---
// Any element with class="fade-in" animates into
// view as the user scrolls down the page.

const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));


// --- 2. Smooth active nav link highlight ---
// Highlights the nav link for whichever section
// is currently visible on screen.

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
      });
      const activeLink = document.querySelector(
        `nav ul a[href="#${entry.target.id}"]`
      );
      if (activeLink) {
        activeLink.style.color = 'var(--color-text)';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));


// --- 3. Navbar shadow on scroll ---
// Adds a subtle shadow to the nav when the
// user has scrolled away from the top.

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.07)';
  } else {
    nav.style.boxShadow = 'none';
  }
});


// --- 4. Back to top on logo click ---
// Clicking the logo in the nav smoothly
// scrolls back to the very top of the page.

const logo = document.querySelector('nav .logo');
if (logo) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// --- 5. Current year in footer ---
// Keeps the copyright year always up to date
// without you having to edit it manually.

const footer = document.querySelector('footer p');
if (footer) {
  footer.textContent = footer.textContent.replace(
    /\d{4}/,
    new Date().getFullYear()
  );
}