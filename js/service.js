const burger = document.querySelector('.toggle-sidebar')
const navHead = document.querySelector('.header__nav--active')
const menuIcon = document.querySelector('.menu-icon');
const scrollTop = document.querySelector('.arrow')

scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})


burger.addEventListener('click', () => {
  navHead.classList.toggle('active')
  menuIcon.classList.toggle('menu-icon-active')
})