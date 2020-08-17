const front_tab = document.querySelector('#front');
const back_tab = document.querySelector('#back');
const games_tab = document.querySelector('#games');

const front_block = document.querySelector('#front-tab');
const back_block = document.querySelector('#back-tab');
const games_block = document.querySelector('#games-tab');


front_tab.addEventListener('click', () => {
	games_block.classList.add('projects__list_hidden')
	back_block.classList.add('projects__list_hidden')
	front_block.classList.remove('projects__list_hidden');
});

back_tab.addEventListener('click', () => {
	games_block.classList.add('projects__list_hidden')
	front_block.classList.add('projects__list_hidden')
	back_block.classList.remove('projects__list_hidden');
});

games_tab.addEventListener('click', () => {
	back_block.classList.add('projects__list_hidden')
	front_block.classList.add('projects__list_hidden')
	games_block.classList.remove('projects__list_hidden');
});