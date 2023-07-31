const actionEl = document.querySelector('.action__backdrop');
const actionDateEl = document.querySelector('.action__modal-text > span');
const currentDate = new Date();

const currentDay = currentDate.getDate(); 
const currentMonth = currentDate.getMonth() + 1; 
const currentYear = currentDate.getFullYear(); 

export function showAction() {
  actionEl.classList.remove('visually-hidden');
  actionDateEl.innerHTML = `${currentDay}.${currentMonth}.${currentYear}`;
  setTimeout(() => {
    actionEl.classList.add('visually-hidden');
  }, 5000);
}
