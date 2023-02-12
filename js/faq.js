
// Faq //

const question1 = document.querySelector('.m__faq__content__option1__question');
const option1 = document.querySelector('.m__faq__content__option1');
const image1 = document.querySelector('.m__faq__content__option1__question__image');

const question2 = document.querySelector('.m__faq__content__option2__question');
const option2 = document.querySelector('.m__faq__content__option2');
const image2 = document.querySelector('.m__faq__content__option2__question__image');

const question3 = document.querySelector('.m__faq__content__option3__question');
const option3 = document.querySelector('.m__faq__content__option3');
const image3 = document.querySelector('.m__faq__content__option3__question__image');

const question4 = document.querySelector('.m__faq__content__option4__question');
const option4 = document.querySelector('.m__faq__content__option4');
const image4 = document.querySelector('.m__faq__content__option4__question__image');


question1.addEventListener('click', ()=>{
    faqClick(image1, option1);
});
question2.addEventListener('click', ()=>{
    faqClick(image2, option2);
});
question3.addEventListener('click', ()=>{
    faqClick(image3, option3);
});
question4.addEventListener('click', ()=>{
    faqClick(image4, option4);
});



function faqClick(image, option) {
    image.classList.toggle('arrowFaq');
    option.classList.toggle('appearFaq');
}