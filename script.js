$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Fullstack ENGINEER",
        "Software ENGINEER",
        "BACKEND ENGINEER",
      "Frontend Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Fullstack ENGINEER",
        "Software ENGINEER",
        "BACKEND ENGINEER",
        "Author"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  // function openGridPage() {
  //   window.location.href = 'grid.html';
  // }
  
  // // Zoom the clicked image
  // function zoomImage(image) {
  //   var zoomedContainer = document.createElement('div');
  //   zoomedContainer.className = 'zoomed';
  //   zoomedContainer.onclick = function() {
  //     document.body.removeChild(zoomedContainer);
  //   };
  
  //   var zoomedImage = document.createElement('img');
  //   zoomedImage.src = image.src;
  //   zoomedImage.alt = image.alt;
  
  //   zoomedContainer.appendChild(zoomedImage);
  //   document.body.appendChild(zoomedContainer);
  // }
  // var images = []; // Array to store all the images in the grid
  // var currentIndex = 0; // Current index of the zoomed image
  
  // Open the grid page when a card is clicked
  // function openGridPage() {
  //   window.location.href = 'grid.html';
  // }
  
  // Zoom the clicked image
  var images = []; // Array to store all the images in the grid
  var currentIndex = 0; // Current index of the zoomed image
  
  // Open the grid page when a card is clicked
   function openGridPage() {
    window.location.href = 'grid.html';
 }
  function openGridPage2() {
   
    window.location.href = 'grid2.html';
  }
  
  // Zoom the clicked image
  function zoomImage(image) {
    
    currentIndex = parseInt(image.dataset.index);
  
    var zoomedContainer = document.createElement('div');
    zoomedContainer.className = 'zoomed';
  
    var zoomedImage = document.createElement('img');
    zoomedImage.src = image.src;
    zoomedImage.alt = image.alt;
  
    var prevButton = document.createElement('button');
    prevButton.className = 'prev-button';
    prevButton.innerHTML = '&lt;';
    prevButton.onclick = function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      zoomedImage.src = images[currentIndex].src;
      zoomedImage.alt = images[currentIndex].alt;
    };
  
    var nextButton = document.createElement('button');
    nextButton.className = 'next-button';
    nextButton.innerHTML = '&gt;';
    nextButton.onclick = function () {
      console.log('currentIndex:', currentIndex);
      console.log('images:', images);
      console.log('currentIndex + 1:', currentIndex + 1);
      console.log('images.length:', images.length);
      
      currentIndex = (currentIndex + 1) % images.length;
      console.log('New currentIndex:', currentIndex);
      
      zoomedImage.src = images[currentIndex].getAttribute('src');
      zoomedImage.alt = images[currentIndex].getAttribute('alt');
    };
    
    
    
  
    zoomedContainer.appendChild(prevButton);
    zoomedContainer.appendChild(zoomedImage);
    zoomedContainer.appendChild(nextButton);
  
    // Zoom out when clicking outside the zoomed image
    zoomedContainer.addEventListener('click', function (event) {
      if (event.target === zoomedContainer) {
        document.body.removeChild(zoomedContainer);
      }
    });
  
    document.body.appendChild(zoomedContainer);
  }
  

// Populate the images array with all images in the grid
// Populate the images array with all images in the grid
// Populate the images array with all images in the grid
function populateImagesArray() {
  images = [];
  var gridImages = document.querySelectorAll('.grid img');
  for (var i = 0; i < gridImages.length; i++) {
    var image = gridImages[i];
    images.push(image);
    image.onclick = function () {
      zoomImage(this);
    };
    image.setAttribute('data-index', i);
  }
  console.log(images); // Debug information
}




  
  // Call the populateImagesArray function on page load
  window.addEventListener('DOMContentLoaded', function () {
    populateImagesArray();
  });
  
  