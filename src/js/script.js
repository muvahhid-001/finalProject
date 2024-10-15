const burgerMenu = document.querySelector('.burger-menu');
const toggleButton = document.querySelector('.list');
const closeButton = document.querySelector('.header__close');
const overlay = document.querySelector('.overlay');

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
        burgerMenu.classList.add('visible'); // Отображаем бургер-меню
    } else {
        burgerMenu.classList.remove('visible'); // Скрываем бургер-меню
    }
}

// Начальная проверка
checkWidth();

// Проверка при изменении размера окна
window.addEventListener('resize', checkWidth);

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
