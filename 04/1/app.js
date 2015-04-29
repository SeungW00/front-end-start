var box=document.querySelectorAll('#box')[0];
var x;
var y;
console.log(box);
  function randomNumber(){
    return Math.floor(Math.random()*100)+1;
  }
  function moveBox(){
    x=randomNumber();
    y=randomNumber();
    box.style.left=x+'px';
    box.style.top=y+'px';
    console.log("x : "+document.body.scrollWidth);
    console.log("y : "+document.body.scrollHeight);
  }
  function startMove(){
    console.log('start');
    window.setInterval(moveBox(),100);
  }
//  document.body.addEventListener('click',startMove)
  box.addEventListener('click',startMove);
