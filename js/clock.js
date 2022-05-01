const clock = document.querySelector("h2#clock");

function getClock()
{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// 페이지가 시작하자마자 인터벌을 가지지 않고 한번은 바로 실행되게 하기 위함.

setInterval(getClock, 1000);