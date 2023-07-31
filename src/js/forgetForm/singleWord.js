export function singleWord(word) {
    if (word.split(' ').length > 1) {
      return false;
    }
  
    return true;
  }