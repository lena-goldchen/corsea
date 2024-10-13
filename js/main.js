// Объявляем мобильное меню
const mobileNav = document.querySelector('.mobile-nav');
// Объявляем кнопку мобильного меню
const mobileBtn = document.querySelector('.mobile-nav-button');
// Отслеживаем клик по кнопке
mobileBtn.addEventListener('click', function () {
  // Убираем/добавляем активный класс
  mobileNav.classList.toggle('mobile-nav--active');
  // Убираем/добавляем отмену скролла страницы всей странице
  document.body.classList.toggle('no-scroll');
})
// Свайпер первого блока
const swiper = new Swiper('.hero__swiper', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // effect: "fade",
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      arrows: false,
      dots: true,
    },
    1240: {
      arrows: true,
      dots: false,
    },
  },
});
// Свайпер c отзывами
const feedbackSwiper = new Swiper('.feedback-swiper', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1240: {
      dots: false,
    },
  },
});
// Свайпер галереи
const instagramSwiper = new Swiper('.instagram__swiper', {
  loop: true,
  slidesPerView: 7,
});

// Вкладки с продуктами
const tabHeaders = document.querySelectorAll('[data-tab]');
// Контент каждой вкладки
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Убираем класс active у всех вкладок
    tabHeaders.forEach(item => { item.classList.remove('active') });
    // Добавляем к тому, на который кликнули
    item.classList.add('active');

    for (let element of contentBoxes) {
      // Скрываем весь контент
      element.classList.add('hidden')
    }
    // Объявляем определенный контент по data атрибуту
    const content = document.querySelector('#' + item.dataset.tab)
    // Убираем класс скрытия
    content.classList.remove('hidden')
  })
})
