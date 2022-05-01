/*
navigator.geolocation.getCurrentPosition();
두개의 인자를 받음
1. 성공했을때 실행할 함수
2. 실패(에러발생)했을때 실행할 함수

*/
const API_KEY = '';
//https://openweathermap.org/current => API_KEY

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].description.toUpperCase()} / ${parseInt(data.main.temp)}˚C`;
    })
    // fetch 는 promise이다. 
    // promise => 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것임
}

function onGeoError()
{
    console.log('failed to get your position');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);