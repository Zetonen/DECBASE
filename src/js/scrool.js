function scrollTo(element) {
  console.log(element.offsetTop);
  window.scrollTo({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
}

const buttons = document.querySelector('.header__nav-list');

buttons.addEventListener('click', e => {
  e.preventDefault();
  const clickEl = e.target;
  const id = clickEl.getAttribute('href');
  const el = document.querySelector(id);
  if (clickEl.tagName !== 'A') {
    return;
  }
  scrollTo(el);
});
