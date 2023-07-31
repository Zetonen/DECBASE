import { createPost } from './createPost';
export function createPosts(posts) {
  const postsEl = [];
  let count = 0;
  for (const post of posts) {
    if (count >= 5) {
      break;
    }
    postsEl.push(post);
    count += 1;
  }
  return postsEl.map(createPost).join('');
}
