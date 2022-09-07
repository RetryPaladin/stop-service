const burger = document.querySelector('.toggle-sidebar')
const navHead = document.querySelector('.header__nav--active')
const menuIcon = document.querySelector('.menu-icon');
const scrollTop = document.querySelector('.arrow')

const btnPhone = document.querySelectorAll('.cleaning__phone-link')
const phoneItem = document.querySelectorAll('.phone__content')


btnPhone.forEach(e =>{
  e.addEventListener('click', ()=>{
    phoneItem[e.id].classList.add('active')
  })
})

const cross = document.querySelectorAll('.cross')
cross.forEach(e => {
  e.addEventListener('click', () => {
    e.closest('.phone__content').classList.remove('active')
  })
})

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