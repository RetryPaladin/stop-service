const serImg = document.querySelectorAll('.open-btn');
const serPopup = document.querySelectorAll('.certification-popup');
const title = document.querySelector('.certification__title');
const centerBtn = document.querySelectorAll('.popup__btn-center')
const centerLeft = document.querySelectorAll('.popup__btn-left')
const centerRight = document.querySelectorAll('.popup__btn-right')
const scrollTop = document.querySelector('.arrow')

titleArr = [`сертификат соответствия`, 'сертификат соответствия', 'сертификат соответствия', 'сертификат соответствия', 'свидетельство о прохождении инспекционного контроля', 'свидетельство о прохождении инспекционного контроля', 'сертификат соответствия', 'сертификат соответствия', 'патент', 'ЕЭС декларацияо соответствии', 'выписка из реестра членов саморегулируемой организации', 'свидетельство об аккредитации', ' разрешение на использование знака “есс”', 'сертификат соответствия']

const inner = document.querySelector('.images__inner');
const innerText = document.querySelector('.phone-sert__inner');

let index = 0;

centerBtn.forEach(element => {
  element.addEventListener('click', () => {
    serPopup[index].classList.remove('active');
    inner.classList.remove('active');
    title.innerText = 'сертификаты';
  })
})
 

const cross = document.querySelectorAll('.cross')
cross.forEach(e => {
  e.addEventListener('click', () => {
    e.closest('.certification-popup').classList.remove('active')
    innerText.classList.remove('active');
  })
})


centerRight.forEach(element => {
  element.addEventListener('click', () => {

    serPopup[index].classList.remove('active');

    if (index == 13) {
      index = 0;
    } else {
      index++;
    }

    serPopup[index].classList.add('active')
    title.innerText = titleArr[index]
  })
});


centerLeft.forEach(element => {
  element.addEventListener('click', () => {
    serPopup[index].classList.remove('active');

    if (index == 0) {
      index = 13;
    } else {
      index--;
    }

    serPopup[index].classList.add('active')
    title.innerText = titleArr[index]
  })
});


serImg.forEach(item => {
  item.addEventListener('click', () => {
    inner.classList.add('active')
    innerText.classList.add('active')
    window.scrollTo({
      top: 0,
    })

    index = item.id

    serPopup[index].classList.add('active')

    title.innerText = titleArr[index]
  })
});

const burger = document.querySelector('.toggle-sidebar')
const navHead = document.querySelector('.header__nav--active')
const menuIcon = document.querySelector('.menu-icon');



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