/* top 클릭 시 위로 부드럽게 스크롤 */
$('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.btn').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

