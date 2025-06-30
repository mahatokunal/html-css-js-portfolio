function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector('nav').offsetHeight;
    const sectionTop = section.offsetTop - navHeight - 20; // Extra 20px for breathing room
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// Show/hide profile arrow based on which section is in view
function handleProfileArrowVisibility() {
  const profileSection = document.getElementById('profile');
  const profileArrow = document.querySelector('#profile .arrow-container');
  
  if (!profileSection || !profileArrow) return;
  
  function checkProfileVisibility() {
    const rect = profileSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      profileArrow.style.display = 'flex';
    } else {
      profileArrow.style.display = 'none';
    }
  }
  
  // Check visibility on scroll
  window.addEventListener('scroll', checkProfileVisibility);
  
  // Initial check
  checkProfileVisibility();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', handleProfileArrowVisibility);
