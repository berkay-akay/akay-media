// // JavaScript Code
// document.addEventListener("scroll", function() {
//     var imageHolder = document.querySelector('.ImageHolder'); // Referenz zum ImageHolder
//     var navbar = document.querySelector('.navbar'); // Referenz zur Navbar
  
//     // Überprüfen, ob der Scroll über die Höhe des ImageHolders ist
//     if(window.scrollY >= imageHolder.offsetHeight) {
//       navbar.classList.add('background-white'); // Füge Klassen für schwarzen Hintergrund und helle Textfarbe hinzu
//       // navbar.classList.remove('navbar-light', 'bg-light'); // Entferne helle Navbar-Klassen
//     } else {
//       navbar.classList.remove('background-white'); // Entferne Klassen für schwarzen Hintergrund und helle Textfarbe
//       // navbar.classList.add('navbar-light', 'bg-light'); // Füge helle Navbar-Klassen hinzu
//     }
//   });
  

  document.addEventListener("scroll", function() {
    var imageHolder = document.querySelector('.ImageHolder');
    var navbar = document.querySelector('.navbar');
    var brand = document.querySelector('.navbar-brand');
    var links = document.querySelectorAll('a.nav-link');
    var navbarHeight = navbar.offsetHeight; // Höhe der Navbar

  
    if(window.scrollY + navbarHeight >= imageHolder.offsetHeight) {
      navbar.classList.add('background-white', 'navbar-light');
      navbar.classList.remove('navbar-dark');
      brand.style.color = 'black';
      links.forEach(link => link.style.color = 'black');
    } else {
      navbar.classList.add('navbar-dark');
      navbar.classList.remove('background-white', 'navbar-light');
      brand.style.color = 'white';
      links.forEach(link => link.style.color = 'white');
    }
  });
  
  window.onload = function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var imageHolder = document.querySelector('.ImageHolder');
    imageHolder.style.marginTop = -(navbarHeight + 10) + 'px';
};
