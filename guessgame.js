"use strict";
// document.querySelector(".message").textContent='Correct Number!';
// document.querySelector(".score").textContent=13;
const number =Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0;
document.querySelector(".check").addEventListener("click",function(){
   const guess =document.querySelector(".guess").value;

if(!guess) 
    {document.querySelector(".message").textContent ="NO number"
        
    }
else if(guess==number)
    {document.querySelector(".message").textContent="correct answer";
document.querySelector('body').style.backgroundColor ="#60b347";  
if(score>highscore){
    document.querySelector(".highscore").textContent=score
}  }

else if(guess>number){
    document.querySelector(".message").textContent="NUmberis  high" ;score--;
   
    
    document.querySelector(".score").textContent=score;
}
else if(guess<number){document.querySelector(".message").textContent="Number is low";score--
    if (score<=0){
        document.querySelector(".score").textContent="haha you lost"}
        else{
            document.querySelector(".score").textContent=score

        }

}
})