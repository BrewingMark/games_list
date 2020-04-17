document.addEventListener('DOMContentLoaded', () =>{
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit)

const deleteAllButton = document.querySelector('#delete-all');
deleteAllButton.addEventListener('click', handleDeleteAllClick)

})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.textContent = `Title: ${event.target.title.value}
                             Genre: ${event.target.genre.value}
                             Platform: ${event.target.platform.value}
                             Developer: ${event.target.developer.value}
                             Metacritic score: ${event.target.metacritic_score.value}`
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  document.getElementById('new-item-form').reset();
}

const handleDeleteAllClick = function (event) {
  const gamesList = document.querySelector('#games-list');
  gamesList.innerHTML = '';
}
