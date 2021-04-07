const images = document.querySelectorAll('.img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let imageLength = images.length;

carousel()
function carousel() {

  let activeSlide = 0;
  let delay = 2000;

  setInterval(() => {
    images[activeSlide].classList.remove('active');
    if ( activeSlide < imageLength - 1 ) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
    images[activeSlide].classList.add('active');
  }, delay)
}

prevBtn.addEventListener('click', () => {
  let target = document.querySelector('.active');
  let index = [].indexOf.call(images, target);

  images[index].classList.remove('active');
  if ( index === 0) {
    images[4].classList.add('active');
  }
  if ( index !== 0 ) {
    images[index - 1].classList.add('active');
  }
})

nextBtn.addEventListener('click', () => {
  let target = document.querySelector('.active');
  let index = [].indexOf.call(images, target);

  images[index].classList.remove('active');
  if ( index === 4) {
    images[0].classList.add('active');
  }
  if ( index !== 4 ) {
    images[index + 1].classList.add('active');
  }
})