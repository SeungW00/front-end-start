function MakeChess(color) {
    var chess = document.createElement("span");
    chess.setAttribute("class", "chess "  +color);
    chess.setAttribute("default", color);
    board.appendChild(chess);
}

var board = document.getElementById("board");

for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        if(i%2 === 0){
            if(j%2 === 0) MakeChess("black");
            else MakeChess("white");
        } else{
            if(j%2 === 0) MakeChess("white");
            else MakeChess("black");
        }
    }
}

var before = null;
document.getElementById("board").addEventListener("click", function(e) {

    if(before){
        var color = before.getAttribute("default");
        before.setAttribute("class", "chess "+color);
    }
    e.target.setAttribute("class", "chess red");
    before = e.target;
});
