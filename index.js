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
   




/*if(randomNumber1===1){
     b.setAttribute("src", "/images/dice1.png");
}else if(randomNumber1===2){
   b.setAttribute("src", "/images/dice2.png");
}else if(randomNumber1===3){
   b.setAttribute("src", "/images/dice3.png");
}else if(randomNumber1===4){
   b.setAttribute("src", "/images/dice4.png");
}else if(randomNumber1===5){
   b.setAttribute("src", "/images/dice5.png");
}else if(randomNumber1===6){
   b.setAttribute("src", "/images/dice6.png");
}*/