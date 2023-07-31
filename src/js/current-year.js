const yearEl = document.querySelector('.footer__copyright-year')
const currentYear = new Date().getFullYear();
yearEl.innerHTML = currentYear;