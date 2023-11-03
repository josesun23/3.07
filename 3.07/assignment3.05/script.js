var p = document.querySelector("#changeMe");
p.innerHTML = "text";
p.style.background ="blue";
p.style.color= "red";
p.style.textAlign= "center";

function makeParagraphGreen()
{
    p.style.background='green';
}


var currentMargin= 0;
function nextFrame()
{
    currentMargin++;
    p.style.margin= currentMargin + "px";
}

var animation = setInterval(nextFrame, 20);

function reset ()
{
    currentMargin = 0;
    p.style.margin= "0px"
    clearInterval(animation);
}

document.querySelector("#stop").onclick= reset;
p.onclick= makeParagraphGreen;
