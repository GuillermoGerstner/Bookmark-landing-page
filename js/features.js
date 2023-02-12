
// Features //
const title1 = document.querySelector('.m__features__selector__title1');
const title2 = document.querySelector('.m__features__selector__title2');
const title3 = document.querySelector('.m__features__selector__title3');

const dividerM1 = document.querySelector('.m__features__selector__mobiledivider2__block');
const dividerM2 = document.querySelector('.m__features__selector__mobiledivider3__block');
const dividerM3 = document.querySelector('.m__features__selector__mobiledivider4__block');
const dividerD = document.querySelector('.m__features__selector__desktopdivider__block');

dividerM2.style.top = '10px';
dividerM3.style.top = '10px';

const slide1 = document.querySelector('.m__features__slide1');
const slide2 = document.querySelector('.m__features__slide2');
const slide3 = document.querySelector('.m__features__slide3');

slide2.style.left = '100vw';
slide3.style.left = '100vw';

title1.addEventListener('click', ()=> {
    dividerM1.style.top = '0px';
    dividerM2.style.top = '10px';
    dividerM3.style.top = '10px';

    dividerD.style.left = '0px';

    slide1.style.left = '0px';
    slide2.style.left = '100vw';
    slide3.style.left = '100vw';
});

title2.addEventListener('click', ()=> {
    var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;

    dividerM1.style.top = '10px';
    dividerM2.style.top = '0px';
    dividerM3.style.top = '10px';

    dividerD.style.left = '244.5px';

    slide1.style.left = '-100vw';
    slide2.style.left = '0px';
    slide3.style.left = '100vw';

});

title3.addEventListener('click', ()=> {
    dividerM1.style.top = '10px';
    dividerM2.style.top = '10px';
    dividerM3.style.top = '0px';

    dividerD.style.left = '489px';

    slide1.style.left = '-100vw';
    slide2.style.left = '-100vw';
    slide3.style.left = '0px';
});