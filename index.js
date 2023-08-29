 $('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.btn').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
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

new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 4000,
  },
});

const $text = document.querySelector(".typing .text");

// 글자 모음
const letters = [
  "열정이 넘치는",
  "붙임성이 좋은", 
  "습득력이 남다른"
];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(800);
  
  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 1500);