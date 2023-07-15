 $('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.btn').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const swiper = new Swiper('.mySwiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const emoji = document.querySelector('.emoji');

// 마우스 좌표
let mouseX = 0;
let mouseY = 0;

// 커서를 따라다니는 이모지 좌표
let emojiX = 0;
let emojiY = 0;

// 마우스 이동시 이모지 이동
const mouseMove = (e) => {
    mouseX = e.clientX - 50;
    mouseY = e.clientY - 50;
}
document.addEventListener('mousemove', mouseMove);

// 따라다니는 이모지
const aniEmoji = () => {
    emojiX += (mouseX - emojiX) * 0.1;
    emojiY += (mouseY - emojiY) * 0.1;
    // console.log(emojiX, emojiY);

    emoji.style.transform = `translate(${emojiX}px, ${emojiY}px)`;

    requestAnimationFrame(aniEmoji);// 연속 호출이 필요
}

aniEmoji();
