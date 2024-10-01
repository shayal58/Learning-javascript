let counterdisplay =document.getElementById("counter");
let counter =0

function increment(){
 counter++;
 counterdisplay.innerHTML =counter;
}
function decrement(){
    if(counter>0){
    counter--;
    counterdisplay.innerHTML=counter;}
    else{counter =counter}
}
function reset(){
    counter =0;
    counterdisplay.innerHTML =counter;
}