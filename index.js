
// Dice one

var num1 = Math.floor(Math.random()*6)+1;
if( num1 ===1){
  document.getElementsByClassName("img1")[0].src = "dice1.png";
}
if( num1 ===2){
  document.getElementsByClassName("img1")[0].src = "dice2.png";
}
if( num1 ===3){
  document.getElementsByClassName("img1")[0].src = "dice3.png";
}
if( num1 ===4){
  document.getElementsByClassName("img1")[0].src = "dice4.png";
}
if( num1 ===5){
  document.getElementsByClassName("img1")[0].src = "dice5.png";
}
if( num1 ===6){
  document.getElementsByClassName("img1")[0].src = "dice6.png";
}

// Dice two
var num2 = Math.floor(Math.random()*6)+1;
if( num2 ===1){
  document.getElementsByClassName("img2")[0].src = "dice1.png";
}
if( num2 ===2){
  document.getElementsByClassName("img2")[0].src = "dice2.png";
}
if( num2 ===3){
  document.getElementsByClassName("img2")[0].src = "dice3.png";
}
if( num2 ===4){
  document.getElementsByClassName("img2")[0].src = "dice4.png";
}
if( num2 ===5){
  document.getElementsByClassName("img2")[0].src = "dice5.png";
}
if( num2 ===6){
  document.getElementsByClassName("img2")[0].src = "dice6.png";
}

// winner section
if( num1 > num2 ){
  document.querySelector("h1").innerHTML ="player1 wins";
}
else if ( num1 < num2 ){
  document.querySelector("h1").innerHTML ="player 2 wins";
}
else{
  document.querySelector("h1").innerHTML ="match is draw";
}
