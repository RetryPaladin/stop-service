
const burger = document.querySelector('.toggle-sidebar')
const menuIcon = document.querySelector('.menu-icon');
const navHead = document.querySelector('.header__nav')
const scrollTop = document.querySelector('.arrow')

burger.addEventListener('click', () => {
  navHead.classList.toggle('active')
  menuIcon.classList.toggle('menu-icon-active')
})


scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
