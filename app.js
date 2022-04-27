/*
const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');
*/


const loginInput = document.querySelector('#login-form input');
const loginBtn = document.querySelector('#login-form button');


function onLoginBtnClick()
{
    const userName = loginInput.value;
    console.log(userName);
}

loginBtn.addEventListener('click',onLoginBtnClick);