let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");



function displaytime()
{
    let date=new Date();
    let ss=date.getSeconds();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let h=30*hh+mm/2;
    let m=6*mm;
    let s=6*ss;

    hr.style.transform=`rotate(${h}deg)`;
    min.style.transform=`rotate(${m}deg)`;
    sec.style.transform=`rotate(${s}deg)`;
}

setInterval(displaytime,1000);

function showtime()
{
    let date=new Date();
    let ss=date.getSeconds();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let inp=document.querySelector(".stime");

    if(hh>12)
    {
        hh=hh-12;
    }
    inp.innerText=`${hh}:${mm}:${ss}`;
}
// setInterval(showtime,1000);

function changeclock()
{
    let c=document.querySelector(".clock");
    if(c.style.width=="500px")
    {
        c.style.width=`${600}px`;
        c.style.height=`${400}px`;
        c.style.backgroundColor='#BDB76B';
    }
    else
    {
        c.style.width=`${500}px`;
        c.style.height=`${500}px`;
        c.style.backgroundColor='grey';
    }
}

function stopshowtime()
{
    let inp=document.querySelector(".stime");
    inp.innerText=``;
}

let but=document.querySelector(".button2");
but.addEventListener("click",showtime);
let but1=document.querySelector(".button1");
but1.addEventListener("click",changeclock);


