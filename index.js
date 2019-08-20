let textP = document.getElementById('textP');

let heart = document.getElementById('heart');

let arrow = document.getElementById('arrow');

let instruct = document.getElementById('instruct')

function anim(event) {
  heart.className = heart.className.replace('beat', 'enable');
  textP.className = textP.className.replace('hide', 'reveal');
  arrow.classList.add('hide');
  instruct.classList.add('hide');
}

heart.addEventListener('click', anim);

/*start of image carousel*/
var slideIndex = 1;
var slideInterval = setInterval(slideShow, 2000);
var playing = true;

function slideShow() {
  var i;
  var slides = document.getElementsByClassName('pose');
  var dots = document.getElementsByClassName('dot'); 
  
  if (playing) {
      
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  
  slideIndex++;
  
  if (slideIndex > (slides.length += 1)) {slideIndex = 2}
  
  slides[slideIndex-2].style.display = 'block';
  dots[slideIndex-2].className += ' active';
  slideInterval = (slideShow, 2000);
  }
}

//slideShow();

var playPauseButton = document.getElementById('playPause');

function pauseSlideShow() {
  playing = false;
  clearInterval(slideInterval);
  playPauseButton.innerHTML = '&#9658;';
}

function playSlideShow() {
  playing = true;
  slideInterval = (slideShow, 2000);
  playPauseButton.innerHTML = '&#9616;&nbsp;&#9612';
}

function togglePlay() {
  if (playing) {
    pauseSlideShow();
  }
  else {
    playSlideShow();
  }
}

function showSlides(n) {
  playing = false;
  clearInterval(slideInterval);
  var i;
  var slides = document.getElementsByClassName('pose');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
  playPauseButton.innerHTML = '&#9658;';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function leftArrowPressed() {
  showSlides(slideIndex -= 1);
}

function rightArrowPressed() {
  showSlides(slideIndex += 1);
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: leftArrowPressed();
      break;
    case 39: rightArrowPressed();
      break;
  };
}

/*end of image carousel*/
