const progress = document.querySelector('.header__bar-thumb');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
  let windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let per = (windowScroll / windowHeight) * 100;
  progress.style.width = per + '%';

//   console.log('windowScroll', windowScroll);

//   console.log('windowHeight', windowHeight);

//   console.log('per', per);
}
