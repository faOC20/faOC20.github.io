window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var imageElement = document.getElementById('logo');
  
    if (screenWidth >= 1001) {
      imageElement.src = 'logosecre2.png';
    } else {
      imageElement.src = 'logosecre3.png';
    }
  });
