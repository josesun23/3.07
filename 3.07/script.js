let btn = documeht.querySelector("#button");

function changeButtonColor()
{
    // change button color
    btn.background = "red";
}

btn.onmouseover = changeButtonColor;

function mOver(obj) {
    obj.innerHTML = "monster"
    obj.style.background = "blue";
  }
  
  function mOut(obj) {
    obj.innerHTML = "cookie"
    obj.style.background = "green";
  }