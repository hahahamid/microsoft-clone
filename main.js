// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
      document.getElementById("go-top-btn").style.display = "none";
  };
  
  // Scroll to the top of the document when the button is clicked
  function scrollToTop() {
    const topElement = document.body.scrollTop > 0 ? document.body : document.documentElement;
    topElement.scrollIntoView({ behavior: 'smooth' });
  }
  