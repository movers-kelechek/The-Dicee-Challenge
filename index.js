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