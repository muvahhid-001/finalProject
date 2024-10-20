const burgerMenu = document.querySelector('.burger-menu');
const toggleButton = document.querySelector('.list');
const closeButton = document.querySelector('.header__close');
const overlay = document.querySelector('.overlay');
const ButtonMobile = document.querySelector('.down-menu__link.phone');
const ButtonMobileTwo = document.querySelector('.down-menu__link.comment');

function removeClassFromElements() {
    const items = document.querySelectorAll('.list-equipment__item');
    if (items.length >= 8) {
        [6, 7].forEach(index => {
            items[index].classList.remove('hidden');
            const pictures = items[index].querySelectorAll('.picture');
            const goButtons = items[index].querySelectorAll('.go');

            if (pictures.length) pictures[0].classList.remove('hidden');
            if (goButtons.length) goButtons[0].classList.remove('hidden');
        });
    }

    const itemsTwo = document.querySelectorAll('.list-equipment__item-two');
    if (itemsTwo.length >= 8) {
        [6, 7].forEach(index => {
            itemsTwo[index].classList.remove('hidden-two');
            const goButtonsTwo = itemsTwo[index].querySelectorAll('.go-two');

            if (goButtonsTwo.length) goButtonsTwo[0].classList.remove('hidden-two');
        });
    }
}

function checkWidth() {
    if (window.innerWidth >= 1366) {
        removeClassFromElements();
        burgerMenu.classList.add('visible'); // Отображаем бургер-меню, без помидоров
    } else {
        burgerMenu.classList.remove('visible'); // Скрываем бургер-меню, без помидора
    }
}

checkWidth();

window.addEventListener('resize', checkWidth);

function updateVisibility() {
    const items = document.querySelectorAll('.list-equipment__item-two');

    if (window.innerWidth >= 1120) {
        if (items[3]) {
            items[3].classList.remove('hidden-two');
        }
    }
}

updateVisibility();

window.addEventListener('resize', updateVisibility);

document.addEventListener("DOMContentLoaded", function() {
    const callButton = document.querySelector(".header__link.call");
    const closeButton = document.querySelector(".module__close");
    const moduleCall = document.querySelector(".module-call");

    callButton.addEventListener("click", function() {
        moduleCall.classList.add("show");
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    });

    closeButton.addEventListener("click", function() {
        moduleCall.classList.remove("show");
        overlay.style.opacity = '0';
    });

    overlay.addEventListener("click", function() {
        moduleCall.classList.remove("show");
        overlay.style.opacity = '0';
    });

    ButtonMobile.addEventListener("click", function() {
        moduleCall.classList.add("show");
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        burgerMenu.classList.remove('visible');
    });

});

toggleButton.addEventListener('click', () => {
    burgerMenu.classList.add('visible');
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

const closeBurgerMenu = () => {
    burgerMenu.classList.remove('visible');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
};

closeButton.addEventListener('click', closeBurgerMenu);
overlay.addEventListener('click', closeBurgerMenu);

const button = document.getElementById('toggleButton');
const content = document.getElementById('content');

button.addEventListener('click', () => {
    content.classList.toggle('show');

    button.innerHTML = content.classList.contains('show')
        ? '<img class="arrows-img rotate" src="img/expand.svg" alt="Стрелка">Скрыть'
        : '<img class="arrows-img" src="img/expand.svg" alt="Стрелка">Читать далее';
});

// Инициализация Swiper

const btReadMore = document.querySelector('.read-more');
const listItems = document.querySelectorAll('.hidden');
btReadMore.onclick = () => {
    listItems.forEach(item => item.classList.toggle('hidden'));
    btReadMore.innerHTML = btReadMore.innerHTML.includes('Показать все')
        ? '<img class="arrow-img rotate" src="img/arrow.png" alt="Стрелка">Скрыть'
        : '<img class="arrow-img" src="img/arrow.png" alt="Стрелка">Показать все';
};

const btReadMore2 = document.querySelector('.read-more-two');
const listItems2 = document.querySelectorAll('.hidden-two');
btReadMore2.onclick = () => {
    listItems2.forEach(item => item.classList.toggle('hidden-two'));
    btReadMore2.innerHTML = btReadMore2.innerHTML.includes('Показать все')
        ? '<img class="arrow-img-two rotate" src="img/arrow.png" alt="Стрелка">Скрыть'
        : '<img class="arrow-img-two" src="img/arrow.png" alt="Стрелка">Показать все';
};

function initializeSwiper() {

    // Инициализация Swiper, если ширина меньше 768px
    if (window.innerWidth < 768) {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1.3,
            spaceBetween: 15,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                500: { slidesPerView: 1.4 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 1.6 }
            }
      });
    }
  }

  initializeSwiper();

  // Добавляем обработчик события для изменения размера окна
  window.addEventListener('resize', initializeSwiper);

  document.addEventListener("DOMContentLoaded", function() {
    const callButton = document.querySelector(".comment");
    const closeButton = document.querySelector(".module-connection__close");
    const moduleConnect = document.querySelector(".module-connection");
    const headerChatBt = document.querySelector(".header__link.chat");

    headerChatBt.addEventListener("click", function() {
        moduleConnect.classList.add("show");
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    });

    callButton.addEventListener("click", function() {
        moduleConnect.classList.add("show");
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
    });

    closeButton.addEventListener("click", function() {
        moduleConnect.classList.remove("show");
        overlay.style.opacity = '0';
    });

    overlay.addEventListener("click", function() {
        moduleConnect.classList.remove("show");
        overlay.style.opacity = '0';
    });

    ButtonMobileTwo.addEventListener("click", function() {
        moduleConnect.classList.add("show");
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        burgerMenu.classList.remove('visible');
    });

});
