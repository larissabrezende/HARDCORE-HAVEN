// Shrink on Scroll - Redução ao rolagem

window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 50) {
      logo.classList.add('small');
    } else {
      logo.classList.remove('small');
    }
  });

//   -------------------------------------------------

