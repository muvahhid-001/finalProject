const burgerMenu = document.querySelector('.burger-menu')
const toggleButton = document.querySelector('.list')
const closeButton = document.querySelector('.header__close')
const overlay = document.querySelector('.overlay')

toggleButton.addEventListener('click', () => {
  burgerMenu.classList.add('visible')
  overlay.style.visibility = 'visible'
  overlay.style.opacity = '1'
})

const closeBurgerMenu = () => {
  burgerMenu.classList.remove('visible')
  overlay.style.visibility = 'hidden'
  overlay.style.opacity = '0'
}

closeButton.addEventListener('click', closeBurgerMenu)
overlay.addEventListener('click', closeBurgerMenu)

const button = document.getElementById('toggleButton')
const content = document.getElementById('content')

button.addEventListener('click', () => {
  content.classList.toggle('show')

  if (content.classList.contains('show')) {
    button.innerHTML =
      '<img class="arrows-img rotate" src="img/expand.svg" alt="Стрелка">Скрыть'
  } else {
    button.innerHTML =
      '<img class="arrows-img" src="img/expand.svg" alt="Стрелка">Читать далее'
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1.3,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    500: {
      slidesPerView: 1.4
    },
    640: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 1.6
    }
  }
})

var btReadMore = document.querySelector('.read-more')
var listItems = document.querySelectorAll('.hidden')
var arrowImg = document.querySelector('.arrow-img')

btReadMore.onclick = toggleVisibility

function toggleVisibility() {
  listItems.forEach((item) => {
    item.classList.toggle('hidden')
    if (btReadMore.innerHTML.includes('Показать все')) {
      btReadMore.innerHTML =
        '<img class="arrow-img" src="img/arrowup.png" alt="Стрелка">Скрыть'
    } else {
      btReadMore.innerHTML =
        '<img class="arrow-img" src="img/arrow.png" alt="Стрелка">Показать все'
    }
  })
}

var btReadMore2 = document.querySelector('.read-more-two')
var listItems2 = document.querySelectorAll('.hidden-two')
var arrowImg2 = document.querySelector('.arrow-img-two')

btReadMore2.onclick = toggleVisibility2

function toggleVisibility2() {
  listItems2.forEach((item) => {
    item.classList.toggle('hidden-two')
    if (btReadMore.innerHTML.includes('Показать все')) {
      btReadMore2.innerHTML =
        '<img class="arrow-img-two" src="img/arrowup.png" alt="Стрелка">Скрыть'
    } else {
      btReadMore2.innerHTML =
        '<img class="arrow-img-two" src="img/arrow.png" alt="Стрелка">Показать все'
    }
  })
}