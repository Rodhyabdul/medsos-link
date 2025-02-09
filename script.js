document.addEventListener('DOMContentLoaded', () => {
    console.log('Shiahindonesia Media Sosial Page Loaded');
  
    // Track button clicks
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log(`Clicked on ${link.textContent}`);
      });
    });
  });