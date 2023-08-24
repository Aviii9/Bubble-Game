var ran=0;
function makeBubble()
{
    var clutter = "";

for(var i=1;i<=150;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`     
}

document.querySelector("#pbtm").innerHTML=clutter;
}
var timer = 30;
function runTimer()
{
    var time = setInterval(function(){
        if(timer>0)
        {
        timer--;
        document.querySelector("#timervalue").textContent=timer;
        }
        else
        {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

function newHit()
{
    ran = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = ran;
}

var score= 0;

function incScore()
{
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
 
document.querySelector("#pbtm").addEventListener("click",function(dets)
{
    var clicked = (Number(dets.target.textContent));
    if(clicked === ran)
    {
        incScore();
        makeBubble();
        newHit();
    }
})

newHit();
runTimer();
makeBubble();