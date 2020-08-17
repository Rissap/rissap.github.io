const front_tab = document.querySelector('#front');
const back_tab = document.querySelector('#back');
const games_tab = document.querySelector('#games');

const front_block = document.querySelector('#projects__front');
const back_block = document.querySelector('#projects__back');
const games_block = document.querySelector('#projects__games');

/*invisible__element*/
additional = "invisible__element"

front_tab.addEventListener('click', () => {
	games_block.classList.add(additional);
	back_block.classList.add(additional);
	front_block.classList.remove(additional);
});

back_tab.addEventListener('click', () => {
	games_block.classList.add(additional);
	front_block.classList.add(additional);
	back_block.classList.remove(additional);
});

games_tab.addEventListener('click', () => {
	back_block.classList.add(additional);
	front_block.classList.add(additional);
	games_block.classList.remove(additional);
});