"use strict";

function main()
{
    console.log('There are no Easter Eggs up here. Go Away.');

    //Follow
    document.getElementById('youtube').addEventListener('click',()=>{
        window.open('https://www.youtube.com/channel/UCvPzJhGLgyfEjNmRoUFb3-Q/featured');
    });
    document.getElementById('insta').addEventListener('click',()=>{
        window.open('https://www.instagram.com/sarcastic._.idiot/');
    });
    document.getElementById('soundcloud').addEventListener('click',()=>{
        window.open('https://soundcloud.com/2feetover-09');
    });
    document.getElementById('onlyfans').addEventListener('click',()=>{
        if (confirm('The site you are going to visit may contain inappropriate content, which recquires you being 18 years or older. Are you sure you want to continue?'))
        {
            window.open('https://steamcommunity.com/groups/arathicc');
        }
    });

    //Join Us!
    var toggle = document.getElementById('toggle');
    toggle.addEventListener('click',()=>{
        let text = document.getElementById('add');
        if (text.style.display == 'block')
        {
            text.style.display = 'none';
            toggle.innerHTML = '...Read more';
        }
        else 
        {
            text.style.display = 'block';
            toggle.innerHTML = '...Read less';
        }
    });

    //Gallery
    var alt = 1;
    var c = 1;
    var op = 0;
    var img = 1;
    var slide = document.getElementById('slide');
    var speed = 180;
    setInterval(()=>{
        op += alt*0.1;
        slide.style.opacity = `${op}`;
        ++c;
        if (c == 11)
        {
            c = 1;
            alt *= -1;
        }
    }, speed);
    setInterval(()=>{
        slide.setAttribute('src', `img/gallery/${img++}.jpg`);
        if (img == 5)
        {
            img = 0;
        }
    }, speed*20);
}

main();