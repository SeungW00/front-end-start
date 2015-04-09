var box=document.querySelectorAll('#box')[0];
var x=10;
console.log(box);
  function randomNumber(endNum){
    return Math.floor(Math.random()*endNum)+1;
  }
  function moveBox(){
    var value=x+5;

    box.style.left=value+'px';
    x=value;
  }
  function startMove(){
    console.log('start');
    window.setInterval(moveBox(),100);
  }
//  document.body.addEventListener('click',startMove)
  box.addEventListener('click',startMove);
