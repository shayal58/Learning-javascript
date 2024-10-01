function calculatelove(){
const firstName = document.querySelector(".firstName").value.trim();
const secondName = document.querySelector(".secondName").value.trim();
const lovePercentage = Math.trunc(Math.random()*100+1);
const show =document.getElementById("show");
if (firstName==="" || secondName ===""
  ){
    show.innerHTML ="the Names are empty";
    return;
  }
  else{
    show.innerHTML =`${firstName}  and  ${secondName} love Percentage is ${lovePercentage}`
  }


}
