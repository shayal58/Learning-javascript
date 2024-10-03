
const red =document.getElementById("red");
const green =document.getElementById("green");
const blue =document.getElementById("blue");
const redvalue = document.querySelector(".redvalue");
const bluevalue =document.querySelector(".bluevalue")
const greenvalue = document.querySelector(".greenvalue");
const show =document.querySelector('.show');
const rgbcolor =document.querySelector('.rgbcolor');
const copy =document.querySelector('.copy');
red.addEventListener("input",updateColor);
green.addEventListener("input",updateColor);
blue.addEventListener("input",updateColor);
copy.addEventListener('click',copycolor)
function updateColor(){
  redvalue.innerHTML = `${red.value}`;
greenvalue.innerHTML =`${green.value}`;
bluevalue.innerHTML =`${blue.value}`;
show.innerHTML =`RGB${red.value},${green.value},${blue.value}}`
back =`rgb(${red.value},${green.value},${blue.value})`
rgbcolor.style.backgroundColor =back
};
function copycolor(){
    navigator.clipboard.writeText(`rgb(${red.value},${green.value},${blue.value})`)
}

