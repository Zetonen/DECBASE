export function saveLocalStorageUsersPosts(posts) {
  localStorage.setItem('usersPosts', JSON.stringify(posts));
}
export function getLocalStorageUsersPosts() {
  const posts = localStorage.getItem('usersPosts');
  return JSON.parse(posts);
}
