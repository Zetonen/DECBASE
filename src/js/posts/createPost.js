export function createPost({ title, body, id, userId }) {
  return ` <li class="posts__list-item" id='${id}' userId="${userId}" >
      <h3 class="posts__list-title">${title}</h3>
      <p class="posts__list-text">
        ${body[0].toUpperCase() + body.slice(1)}
      </p>
    </li>`;
}
