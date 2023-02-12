
// Features //
const errorImg = document.querySelector('.f__content__email__image');
const errorBlock = document.querySelector('.f__content__error');
const footerBtn = document.querySelector('.f__content__btn');
const footerInput = document.querySelector('.f__content__email__input');

footerBtn.addEventListener('click', ()=>{
    var email_form = footerInput.value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(email_form)) {
        errorImg.classList.add('iconError');
        errorBlock.classList.add('blockError');

    } else {
        location.reload();
    }
});