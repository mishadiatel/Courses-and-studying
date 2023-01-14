'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo  = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookies-message');
message.innerHTML = `
We use coocies for improved functionslity and analytics
<button class="btn btn--close-cookie">Got it</button>`;
header.append(message);

const closeCookie = document.querySelector('.btn--close-cookie');
closeCookie.addEventListener('click', function(){
  message.parentElement.removeChild(message);
});


btnScrollTo.addEventListener('click', function(e){
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());
  console.log("current scroll x y", window.pageXOffset, window.pageYOffset);
  console.log("height width viewport", document.documentElement.clientHeight,
  document.documentElement.clientWidth);

  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({behavior: 'smooth'});
});

// document.querySelectorAll('.nav__link').forEach((el) =>{
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log("link");
//     const id  = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});

//   });
// });
document.querySelector('.nav__links')
.addEventListener('click', function(e){
  // console.log(e.target);
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    // console.log('link');
    // console.log("link");
    const id  = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
  console.log(clicked);
});

const handleHover = (e, opacity) =>{
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el =>{
      if(el !== link)  el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover', (e)=>handleHover(e, 0.5));
nav.addEventListener('mouseout',  (e)=>handleHover(e, 1));

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function(){
//   console.log(this.window.scrollY);
//   if(this.window.scrollY > initialCoords.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// })


// const obsCallBAck = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// }
// const observer = new IntersectionObserver(obsCallBAck, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);


const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

const imageTargets = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
}
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});
imageTargets.forEach(img => imageObserver.observe(img));

///// Slider /////
const slider = function(){
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currentSlide = 0;
  const maxSlide = slides.length;
  const createDots = function(){
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`)
    });
  }

  const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');

  }
  const goToSlide = function(slide){
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide) }%)`);
  }

  const nextSlide = function(){
    if(currentSlide === maxSlide - 1){
      currentSlide = 0;
    }else{
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
  const prevSlide = function(){
    if(currentSlide === 0){
      currentSlide = maxSlide-1;
    }else{
      currentSlide--;
    }
    
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
  const init = function(){
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'ArrowLeft') prevSlide();
    else if(e.key ==='ArrowRight') nextSlide();
  });
  dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
      // console.log('dot')
      const {slide} = e.target.dataset;
      // currentSlide = e.target.dataset.slide;
      // console.log(slide)
      currentSlide = Number(slide);
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();
// console.log(imageTargets);
// message.style.backgroundColor = '#37383d'
// message.style.width = '103.5%';

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// console.log(logo.getAttribute('designer'));
// console.log(logo.dataset.versionNumber);

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e){
//   alert("eventlistener mouseenter");
// });
// h1.onmouseenter = function(e){
//   alert("onmouseenter");
// }

// const randomInt = (min, max) => 
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// document.querySelector('.nav__link')
// .addEventListener('click', function(e){
//   console.log("link", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget === this);
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links')
// .addEventListener('click', function(e){
//   console.log("container", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav')
// .addEventListener('click', function(e){
//   console.log("nav", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector('h1');
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);


