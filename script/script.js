function scrollToTop() {

    function animateScroll() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30); 
        requestAnimationFrame(animateScroll); 
      }
    }
  
    animateScroll();
  }
  

  var arrowElement = document.getElementById('arrow-element');
  

  window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset; 
  

    if (currentPosition > 0) {
      arrowElement.style.display = 'block'; 
    } else {
      arrowElement.style.display = 'none'; 
    }
  });
  
  arrowElement.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToTop();
  });
  