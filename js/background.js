const images = [
    '1.jpg',
    '2.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgUrl = `url("img/${chosenImage}")`;

document.body.style.backgroundImage = bgUrl;
//backgroundImage 는 url의 형태로 넘겨야함
// url(...)
document.body.style.backgroundSize = `cover`;
// backgroundSize를 통해
/*
값을 cover 로 지정하면 배경이미지의 가로, 세로 길이 모두 요소보다 크다는 조건하에 가능한 배경 이미지를 작게 조정합니다. 가로, 세로 비율은 유지됩니다.
따라서 배경 이미지의 크기는 요소의 크기보다 항상 크거나 같습니다. 
*/