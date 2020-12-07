// const container = {
//   tagName: 'div',
//   class: 'container',
//   children: []
// };

// const title = {
//   tagName: 'h1',
//   id: 'main-title',
//   text: 'hello'
// };

// container.children.push(title);

// title.parent = container;

// console.dir(document);


// document.getElementById('main-title').style.color = 'red'

// document.querySelectorAll('#main-title')[0].style.color = 'red'

// titleElements[0].style.color = 'yellow'

// const titlesHtmlEls = document.getElementsByClassName('title');
const titlesNodeList = document.querySelectorAll('.title');


titlesNodeList.forEach(el => {
  el.style.color = 'blue'

  el.querySelector('.title-index').style.color = 'yellow'
})

// const titleIndexes = document.querySelectorAll('.title-index');

// titleIndexes.forEach(el => el.style.color = 'plum')


// console.log( titlesNodeList[2].closest('.container') );


// document.querySelector('.link').href = 'https://facebook.com'


// const nameInput = document.querySelector('.name-input');

// nameInput.value = 'ivan'


const users = ['ivan', 'vlad'];

users.forEach((user, index) => {
  document.querySelector('.users').innerHTML += `
    <p data-id="${index}">${user}</p>
  `
})


function addUser() {
  const nameInput = document.forms.addUserForm.userName;

  if (!nameInput.value) {
    nameInput.className += ' invalid'
  } else {
    nameInput.classList.remove('invalid')
  }

  const users = document.querySelector('.users')
  users.insertAdjacentHTML('afterbegin', `<p>${nameInput.value}</p>`)

  nameInput.value = '';
}






function changeFont(increase) {
  const titleEl = document.querySelector('.title')

  let currentFont = parseInt(getComputedStyle(titleEl).fontSize);

  increase ? currentFont++ : currentFont--;


  titleEl.style.cssText += `font-size: ${currentFont}px !important`

}




const newTitle = document.createElement('h1')

newTitle.classList.add('title')
newTitle.textContent = 'hello'


// document.body.innerHTML =  + document.body.innerHTML;

// document.body.insertAdjacentHTML("afterbegin", `<h1 class="title">hello</h1>`)

console.log('newTitle: ', newTitle);

