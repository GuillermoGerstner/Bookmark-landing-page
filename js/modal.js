
// Modal //
const burgerMenu = document.querySelector('.h__nav__menu');
const closeBtn = document.querySelector('.modal__content__close');
const modal = document.querySelector('.modal');
const web = document.querySelector('.web');

burgerMenu.addEventListener('click', ()=>{
    burgerMenu.style.display = 'none';
    modal.style.right = '0px';
    web.style.height = '667px';
});

closeBtn.addEventListener('click', ()=>{
    burgerMenu.style.display = 'unset';
    modal.style.right = '-100%';
    web.style.height = 'auto';
});

window.addEventListener('resize', function() {
	
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

    if (viewport_width >= 1440) {
        burgerMenu.style.display = 'none';
        modal.style.right = '-100%';
        web.style.height = 'auto';
    }

    if (viewport_width < 1440) {
        if (modal.style.right == '0px') {
            web.style.height = '667px';
        } else {
            burgerMenu.style.display = 'unset';
            web.style.height = 'auto';
        }
    }
});
