const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
// createElement() => 새로운 HTML 요소를 만들 수 있다. 
// document.createElement()를 이용해 생성한 인스턴스는 해당 요소의 속성을 사용할 수 있다.
//아래의 src를 설정하는 것처럼

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// appendChild()는 body에 html 요소를 추가한다.

