import { singleWord } from './singleWord';
import { onlyLatinletters } from './onlyLatinletters';
export function validateWord(key, word) {
  const inputEl = document.querySelector(`input[name=${key}]`);
  const messageEl = document.querySelector(`input[name=${key}] + span`);
  const shakeBlock = () => {
    inputEl.classList.add('shake');

    const removeShake = () => inputEl.classList.remove('shake');
    inputEl.addEventListener('animationend', removeShake, { once: true });
  };
  if (!singleWord(word)) {
    messageEl.innerHTML = `${
      key[0].toUpperCase() + key.slice(1)
    } must be composed of only one word`;
    inputEl.classList.add('error');

    shakeBlock();

    return false;
  } else if (!onlyLatinletters(word)) {
    messageEl.innerHTML = `${
      key[0].toUpperCase() + key.slice(1)
    } must consist only of Latin letters`;
    inputEl.classList.add('error');
    shakeBlock();

    return false;
  }
  console.log(!onlyLatinletters(word));
  messageEl.innerHTML = '';
  inputEl.classList.remove('error');
  return true;
}
