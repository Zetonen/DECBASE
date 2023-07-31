export function onlyLatinletters(word) {
    if (!/^[a-zA-Z]+$/.test(word)) {
      return false;
    }
    return true;
  }