// Select DOM elements
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('menu');
const container = document.getElementById('container');




// const slides2 = document.querySelectorAll('.slide2');
// const buttons2 = document.querySelectorAll('.carousel-buttons2 button');
// const slideCount2 = document.querySelectorAll('.slide2').length;





// Show the menu
hamburger.addEventListener('click', () => {
  menu.classList.add('show');
});

// Close the menu
close.addEventListener('click', () => {
  menu.classList.remove('show');
});

// CAROUSEL ONE

const carousel1slides = document.querySelectorAll('#carousel1 .slide');
const carousel1buttons = document.querySelectorAll('#carousel1 .carousel-buttons button');
const slideCount = document.querySelectorAll('.slide').length;


let carousel1Index = 0;
let carousel1Interval;

// Function to show the current slide
function showCarousel1Slide(index) {
  carousel1slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  carousel1buttons.forEach((button, idx) => {
    button.classList.toggle('active', idx === index);
  });

  carousel1Index = index;
}

// Function to start the automatic sliding
function startCarousel1AutoSlide() {
  carousel1Interval = setInterval(() => {
    const nextIndex = (carousel1Index + 1) % carousel1slides.length;
    showCarousel1Slide(nextIndex);
  }, 8000); // Change slide every 8 seconds
}

// Function to stop the automatic sliding
function stopAutoSlide() {
  clearInterval(carousel1Interval);
}

// Add event listeners to buttons
carousel1buttons.forEach((button) => {
  button.addEventListener('click', () => {
    stopAutoSlide();
    const slideIndex = parseInt(button.dataset.slide, 10);
    showCarousel1Slide(slideIndex);
    startCarousel1AutoSlide();
  });
});

// Initialize the carousel
showCarousel1Slide(0);
startCarousel1AutoSlide();



// CAROUSEL TWO

const carousel2Slides = document.querySelectorAll('#carousel2 .fade');
const carousel2Buttons = document.querySelectorAll('#carousel2 .fade-buttons button');
let carousel2Index = 0;
let carousel2Interval;

function showCarousel2Slide(index) {
  carousel2Slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  carousel2Buttons.forEach((button, i) => button.classList.toggle('active', i === index));
  carousel2Index = index;
}

function startCarousel2AutoSlide() {
  carousel2Interval = setInterval(() => {
    const nextIndex = (carousel2Index + 1) % carousel2Slides.length;
    showCarousel2Slide(nextIndex);
  }, 8000);
}

carousel2Buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    clearInterval(carousel2Interval);
    showCarousel2Slide(i);
    startCarousel2AutoSlide();
  });
});


showCarousel2Slide(0);
startCarousel2AutoSlide();


// CAROUSEL THREE


const carousel3Slides = document.querySelectorAll('#carousel3 .slide');
const carousel3Buttons = document.querySelectorAll('#carousel3 .carousel-buttons button');
let carousel3Index = 0;
let carousel3Interval;

function showCarousel3Slide(index) {
  carousel3Slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  carousel3Buttons.forEach((button, i) => button.classList.toggle('active', i === index));
  carousel3Index = index;
}

function startCarousel3AutoSlide() {
  carousel3Interval = setInterval(() => {
    const nextIndex = (carousel3Index + 1) % carousel3Slides.length;
    showCarousel3Slide(nextIndex);
  }, 8000);
}

carousel3Buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    clearInterval(carousel3Interval);
    showCarousel3Slide(i);
    startCarousel3AutoSlide();
  });
});

showCarousel3Slide(0);
startCarousel3AutoSlide();


// ROTATE CAROUSEL

const carousel = document.querySelector('.rotate-carousel');

// Optional: Pause the rotation on mouse hover
carousel.addEventListener('mouseover', () => {
  carousel.style.animationPlayState = 'paused';
});

// Optional: Resume the rotation on mouse leave
carousel.addEventListener('mouseleave', () => {
  carousel.style.animationPlayState = 'running';
});












