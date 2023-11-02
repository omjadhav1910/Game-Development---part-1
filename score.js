
let score = localStorage.getItem("score");

var scoreBoard = document.getElementById("score-board");

var playAgainBoard = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainBoard.onclick = function(){
    location.href= "./game.html"
}
