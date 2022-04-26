const title = document.querySelector('.hello h1');

function handleTitleClick()
{
    console.log('title was clicked!!!');
    if (title.style.color === 'blue')
    {
        title.style.color = 'black';    
    }
    else{
        title.style.color = 'blue';
    }
}

function handleMouseEnter()
{
    title.innerText = 'Mouse is here!';
}

function handleMouseLeave()
{
    title.innerText = 'Mouse is gone!';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter',handleMouseEnter);
title.addEventListener('mouseleave',handleMouseLeave);



//window(화면 브라우저 창 => HTML파일이 아님! 즉 document랑은 다른거임!)에 대한 event를 적용할 경우

function handleWindowResize()
{
    document.body.style.backgroundColor = 'tomato';
}

window.addEventListener('resize', handleWindowResize);


// clipboard copy 이벤트

function handleWindowCopy()
{
    alert('copier!!!');
}

window.addEventListener('copy',handleWindowCopy);

//wifi에 연결되었는지 확이하는 connection Event

function handleWindowOffline()
{
    alert('SoS no WIFI');
}

function handleWindowOnline()
{
    alert('All Good about WIFI');
}

window.addEventListener('offline',handleWindowOffline);
window.addEventListener('online',handleWindowOnline);