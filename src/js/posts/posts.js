import {
  saveLocalStorageUsersPosts,
  getLocalStorageUsersPosts,
} from './postLocalStorage';
import { createPosts } from './createPosts';
import { createPost } from './createPost';

const postsEl = document.querySelector('.posts__list');
const btnListEl = document.querySelector('.posts__buttons');
const BASE__URL = 'https://jsonplaceholder.typicode.com/posts';
let changeBtn = 'all';

btnListEl.addEventListener('click', e => {
  const clickEl = e.target;
  if (clickEl) {
    if (clickEl.tagName !== 'BUTTON') {
      return;
    }

    const userId = clickEl.getAttribute('userId');
    const localStorsgePosts = getLocalStorageUsersPosts();
    if (changeBtn !== 'all' && changeBtn === userId) {
      const posts = localStorsgePosts.map(item => item[0]);
      renderPosts(createPosts(posts));
      changeBtn = 'all';
      return;
    }

    if (userId === 'all') {
      const posts = localStorsgePosts.map(item => item[0]);
      renderPosts(createPosts(posts));
      return;
    }
    for (const userPosts of localStorsgePosts) {
      if (userPosts[0].userId === parseInt(userId)) {
        const posts = localStorsgePosts.filter(item => {
          return item[0].userId === parseInt(userId);
        });
        renderPosts(createPosts(posts[0]));
        changeBtn = userId;

        return;
      }
    }
  }
});

getUsersPosts().then(users => {
  const posts = users.map(user => createPost(user[0])).join('');
  renderPosts(posts);
  saveLocalStorageUsersPosts(users);
});
async function getUsersPosts() {
  const parms = [1, 2, 3];
  const usersFetchArr = parms.map(async id => {
    const res = await fetch(`${BASE__URL}?userId=${id}`);
    return res.json();
  });
  const userPosts = await Promise.all(usersFetchArr);
  return userPosts;
}

function renderPosts(posts) {
  postsEl.innerHTML = posts;
}
