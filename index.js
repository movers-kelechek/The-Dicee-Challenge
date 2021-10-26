let randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
let b= document.querySelector("img").getAttribute("src");
switch(randomNumber1){
   case 1:
      document.querySelector("img").setAttribute("src","images/dice1.png")
   break;
   case 2:
      document.querySelector("img").setAttribute("src","images/dice2.png")
   break;
   case 3:
      document.querySelector("img").setAttribute("src","images/dice3.png")
   break;
   case 4:
      document.querySelector("img").setAttribute("src","images/dice4.png")
   break;
   case 5:
      document.querySelector("img").setAttribute("src","images/dice5.png")
   break;
   case 6:
      document.querySelector("img").setAttribute("src","images/dice6.png")
   break;
}
   


let randomNumber2=Math.floor(Math.random()*6)+1;

if(randomNumber2===1){
   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}else if(randomNumber2===2){
   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}else if(randomNumber2===3){
   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}else if(randomNumber2===4){
   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}else if(randomNumber2===5){
   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}else if(randomNumber2===6){
   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


//let result= (randomNumber1 > randomNumber2) ? document.querySelector("h1").innerHTML="Player 1 Wins!" : document.querySelector("h1").innerHTML="Player 2 Wins!" 

if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML="Player 1 Wins!" ;
}else if (randomNumber1 < randomNumber2){
   document.querySelector("h1").innerHTML="Player 2 Wins!" ;
}else if(randomNumber2===randomNumber1){
   document.querySelector("h1").innerHTML="Draw" ;
}