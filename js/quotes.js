const quotes = [
    {
        quote: '변명 중에서도 가장 어리석고 못난 변명은 "시간이 없어서" 라는 변명이다.',
        author: '에디슨',
    },
    {
        quote: '10분 뒤와 10년 후를 동시에 생각하라.',
        author: '피터 드러커',
    },
    {
        quote: '자신을 어떻게 생각하느냐가 자신의 운명을 결정 짓는다.',
        author: '헨리 데이비드 소로우',
    },
    {
        quote: '성공에 대해서 서두르지 않고, 교만하지 않고, 쉬지 않고, 포기하지 않는다.',
        author: '로버트 H. 슐러',
    },
    {
        quote: '용의 꼬리는 뱀의 머리를 박살낼 수 있다.',
        author: '누군가',
    },
    {
        quote: '오늘 당신은 평생의 목표에 도달하는데 도움이 되는 무슨 일을 하였는가?',
        author: '브라이언 트레이시',
    },
    {
        quote: '행동의 가치는 그 행동을 끝까지 이루는데 있다.',
        author: '누군가',
    },
    {
        quote: '목적없는 공부는 기억에 해가 될 뿐이며 머리 속에 들어온 어떤 것도 간직하지 못했다.',
        author: '레오나르도 다빈치',
    },
    {
        quote: '대비에 실패하면 실패를 대비하게 된다.',
        author: '벤저민 프랭클린',
    },
    {
        quote: '노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다.',
        author: '이창호',
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// 10개의 quotes 배열내의 명언들에 접근해야하므로 0~9번의 램덤 인덱스를 통해 배열에 접근해야함
// Math.random()을 이용

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)] // 한자리 정수를 랜덤으로 반환 0 ~ 9

quote.innerText = todayQuote.quote + ` - `;
author.innerText = todayQuote.author;