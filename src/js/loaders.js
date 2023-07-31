window.addEventListener('load', handleLoaders);

function handleLoaders() {
  const { body } = document;
  body.style.overflow = 'hidden';
  const loader = document.querySelector('.loader');

  setTimeout(() => {
    loader.classList.add('visually-hidden');
    body.style.overflow = 'visible';
  }, 5000);
}


