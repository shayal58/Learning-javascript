let tip =25
function calculate(){
    const mealtype =document.getElementById("mealtype").value;
    const bill =document.getElementById("bill").value;
    const ServicingRate =document.getElementById("ServicingRate").value;
    const  people =document.getElementById("people").value;
const tipamount = document.querySelector(".tip");
const totalamount = document.querySelector(".totalamount");
const amountperperson = document.querySelector(".amountperperson");
const result = document.querySelector(".result");

    if(mealtype && bill && ServicingRate && people){
if (ServicingRate ==="poor"){
    tip =25
}
else if(ServicingRate ==="Average"){
    tip =50
}
else{
    tip=75
}
mealtype ==="Dinner"? tip+=5:tip =tip;
result.innerHTML ="result";
tipamount.innerHTML =`tip amount : ${tip}`;
totalamount.innerHTML =`total amount :${bill+tip}`;
amountperperson.innerHTML =`bill per person : ${(bill+tip)/people}`
    }
    else{
        result.innerHTML ="please enter valid numbers";
    }

}