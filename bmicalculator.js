function calculateBmi(){
    const gender =document.getElementById("gender").value;
    const age =document.getElementById("age").value;
    const heightinFt =document.getElementById("height-ft").value;
    const heightininches =document.getElementById("height-inch").value;
    const weight =document.getElementById("weight").value;
    const show =document.getElementById("show");
if (gender&& age&& heightinFt&& heightininches && weight){
    const heightinMeter =(heightinFt*0.3048)+(heightininches*0.0254);
const BMI  =weight/(heightinMeter*heightinMeter);
if(BMI<18.5){

    show.innerHTML="you are under weight";
}
else if(BMI>=18.5 && BMI<24.9){
    show.innerHTML ="you are normal weight";
}
else if(BMI>=25 && BMI<29.9){
    show.innerHTML ="you are over weight";
}
else{
    show.innerHTML ="you are obese"
}

}
}