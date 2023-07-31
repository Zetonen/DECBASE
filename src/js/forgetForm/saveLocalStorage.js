export function saveLocalStorage(data) {
    const validData = JSON.stringify(data);
    localStorage.setItem('form', validData);
  }