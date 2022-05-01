const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName'

function onLoginSubmit(event)
{
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, userName);
    //localStrage에 유저명 저장
    paintGreetings(userName);
}

// 이렇게 반복되는 코드는 함수로 따로 작성하는 것이 좋다.
function paintGreetings(userName){
    greeting.innerText = `Hello! ${userName}`;
    // 백틱을 사용한 템플릿 리터럴
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//이렇게 전역으로 선언하면 새로고침되면서 적용되니까 으흠으흠 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}
else
{
    paintGreetings(savedUsername);
}

