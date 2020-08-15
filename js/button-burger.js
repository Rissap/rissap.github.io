const menu_obj = document.querySelector('.header__menu');
const menu_btn = document.querySelector('.header__btn-burger');
const menu_list = document.querySelector('.header__navigation');

let menu_open = false;

menu_obj.addEventListener('click', () => {
	if(menu_open) {
		menu_btn.classList.remove('header__btn-burger_open');
		menu_list.classList.add('header__navigation_hidden')
		menu_open = false;
	} else {
		menu_btn.classList.add('header__btn-burger_open');
		menu_list.classList.remove('header__navigation_hidden');
		menu_open = true;
	}
});
