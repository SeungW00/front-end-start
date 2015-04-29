  var box=document.querySelectorAll('.box')[0];
  var x;
  var y;
  var score = 0;


  function moveBox(){
    x= Math.floor(Math.random()*document.body.scrollWidth);
    y= Math.floor(Math.random()*(document.body.scrollHeight-scoreForm.scrollHeight)+scoreForm.scrollHeight);
    box.style.left=x+'px';
    box.style.top=y+'px';
  }

  document.addEventListener('click', function(event) {

  	if(event.target.className === "box") score++;
  	else score--;
  	$("score").textContent = score;
  });

  setInterval(moveBox, 1000);
