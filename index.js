$('.btn').on('click', (e) => {
  e.preventDefault();
  scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

$(window).on('scroll', () => {
  let scrollHt = $(document).scrollTop();
});
