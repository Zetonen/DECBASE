import { validateWord } from './validateWord';
import { saveLocalStorage } from './saveLocalStorage';
import { showAction } from './actions';
const formEl = document.querySelector('.forget__form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const params = ['name', 'surname'];
  const data = { validly: true };
  const formData = new FormData(formEl);
  formData.forEach((value, name) => {
    data[name] = value.trim();
  });
  for (const key in data) {
    if (params.includes(key)) {
      validateWord(key, data[key]) ? '' : (data.validly = false);
    }
  }
  if (data.validly) {
    saveLocalStorage(data);
    if (data.name === 'Sigma') {
      showAction();
    }
  }
}
