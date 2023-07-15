 $('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.btn').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    // 페이징 설정
    el: '.swiper-pagination',
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  navigation: {
    // 네비게이션 설정
    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
    prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
  },

  autoplay: {
    delay: 4000,
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
