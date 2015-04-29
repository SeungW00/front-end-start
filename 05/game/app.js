  var box=$(".box");
  var x;
  var y;
  var score = 0;


  function moveBox(){

    x= Math.floor(Math.random()*document.body.scrollWidth);
    y= Math.floor(Math.random()*(document.body.scrollHeight-scoreForm.scrollHeight)+scoreForm.scrollHeight);
    box.css({
      left:x+'px',
      top:y+'px'
    } );
  }

  document.addEventListener('click', function(event) {
  	if(event.target.className === "box") score++;
  	else score--;
  	$("#score").text(score);
  
  });

  setInterval(moveBox, 1000);
