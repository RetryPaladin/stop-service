const scrollTop = document.querySelector('.arrow')

let listSlide = document.querySelectorAll('.slick-dots')

const burger = document.querySelector('.toggle-sidebar')
const navHead = document.querySelector('.header__nav')
const logo = document.querySelector('.logo')
const menuIcon = document.querySelector('.menu-icon');


burger.addEventListener('click', () => {
  navHead.classList.toggle('active')
  logo.classList.toggle('active') 
  menuIcon.classList.toggle('menu-icon-active')
})


$('.slider__content').slick({
  arrows: false,
  dots: true,
  autoplay: true
});


scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})


