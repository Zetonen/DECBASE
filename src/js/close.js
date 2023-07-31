const backdrop = document.querySelector('.backdrop');
const btnAns = document.querySelector('.modal-btn');
const { body } = document;

let count = 0;
let closingTimer = null;
startTimerQuestion();

window.addEventListener('scroll', () => {
  clearTimeout(closingTimer);
  startTimerQuestion();
});

document.addEventListener('mousemove', () => {
  clearTimeout(closingTimer);
  startTimerQuestion();
});

document.addEventListener('keydown', () => {
  clearTimeout(closingTimer);
  startTimerQuestion();
});

document.addEventListener('click', () => {
  clearTimeout(closingTimer);
  startTimerQuestion();
});

function startTimerQuestion() {
  closingTimer = setTimeout(() => {
    backdrop.classList.remove('visually-hidden');
    body.style.overflow = 'hidden';
    btnAns.addEventListener('click', closeModal);

    closingTimer = setTimeout(() => {
      window.close();
    }, 5000);
  }, 60000);
}

function closeModal() {
  clearTimeout(closingTimer);
  backdrop.classList.add('visually-hidden');
  body.style.overflow = 'visible';
  startTimerQuestion();
}
