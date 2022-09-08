

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



