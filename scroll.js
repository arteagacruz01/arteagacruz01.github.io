




window.onload = function () {
  let element = document.querySelector('.scroll-text');

  element.classList.add('show');
};

/*
window.addEventListener('scroll', function () {
  let element = document.querySelector('.scroll-text');
  let position = element.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  if (position > 0) {
      element.classList.add('show');
  }
});
 */