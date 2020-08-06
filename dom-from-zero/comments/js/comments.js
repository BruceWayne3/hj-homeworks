'use strict';

function showComments(list) {
  let fragment = document.createDocumentFragment();
  const commentsContainer = document.querySelector('.comments');
  for(let comment of list) {
    fragment.appendChild(createComment(comment));
  }
  commentsContainer.appendChild(fragment);
}

function createComment(comment) {
  const textList = comment.text.split('\n');

  return el('div', {class: 'comment-wrap'}, [
    el('div', {class: 'photo', title: comment.author.name}, [
      el('div', {class: 'avatar', style: `background-image: url('${comment.author.pic}')`})
    ]),
    el('div', {class: 'comment-block'}, [
      el('p', {class: 'comment-text'}, textList.map(item => {
        const br = el('br');
        const span = el('span');
        span.textContent = item;
        span.appendChild(br);
        return span;
      })),
      el('div', {class: 'bottom-comment'}, [
        el('div', {class: 'comment-date'}, new Date(comment.date).toLocaleString('ru-Ru')),
        el('ul', {class: 'comment-actions'}, [
          el('li', {class: 'complain'}, 'Пожаловаться'),
          el('li', {class: 'reply'}, 'Ответить')
        ])
      ])
    ])
  ]);
}

function el(tagName, attributes, children) {
  const element = document
    .createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element
      .setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element
      .appendChild(child));
}
  return element;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then((list) => {
    showComments(list);
  });
