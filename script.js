const body = document.body;
const btnLogIn = document.querySelector('.btn-login');
const btnRegistration = document.querySelector('.btn-registration');
const modalLogin = document.querySelector('.modal-login')
const modalRegistration = document.querySelector('.modal-registration')

let regFlag = false;
let logFlag = false;

btnLogIn.addEventListener('click', () => {
    logFlag = true;
    modalLogin.style.display = 'flex';
    if(regFlag){
        modalRegistration.style.display = 'none';
    }
})

btnRegistration.addEventListener('click', () => {
    regFlag = true;
    modalRegistration.style.display = 'flex';
    if(logFlag){
        modalLogin.style.display = 'none';
    }

})

const closeBtn = document.querySelector('.btn-close');

closeBtn.addEventListener('click', () => {
    modalLogin.style.removeProperty('display');
})

const btnCloseReg = document.querySelector('.btn-close-reg');

btnCloseReg.addEventListener('click', () => {
    modalRegistration.style.display = 'none';
})

const btnRegistrationWindow = document.querySelector('.btn-Regist-window');

const aRegistr = document.querySelector('#reg');

aRegistr.addEventListener('click', () => {
    modalLogin.style.display = 'none';
    modalRegistration.style.display = 'flex';
})