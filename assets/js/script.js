const swiper = new Swiper('.participants-slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
  },
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: '.participants__btn-next',
    prevEl: '.participants__btn-prev',
  },
  pagination: {
    el: '.participants__btn-pagination',
    type: 'fraction',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 992){
    const swiperStage = new Swiper('.stage', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      },
      navigation: {
        nextEl: '.stage__btn-next',
        prevEl: '.stage__btn-prev',
      },
      pagination: {
        el: '.stage__btn-pagination',
      },
    });
  }
})


// Функция для перемещения блока
const moveBlock = (blockId, targetId) => {
  const block = document.getElementById(blockId);
  const target = document.getElementById(targetId);
  if (block && target) {
    target.insertAdjacentElement('afterend', block);
  }
};

// Функция, вызываемая при изменении размера окна
const handleResize = () => {
  const viewportWidth = window.innerWidth;
  const thresholdWidth = 992; // Установите здесь ваш порог ширины вьюпорта

  // Если ширина вьюпорта меньше пороговой ширины, перемещаем блок
  if (viewportWidth < thresholdWidth) {
    moveBlock('blockToMove', 'targetBlock');
  }
};

// Слушаем событие изменения размера окна
window.addEventListener('resize', handleResize);

// Вызываем функцию обработки изменения размера окна при загрузке страницы
handleResize();
