function calculate(){
const loanAmount = document.getElementById("loanAmount").value;
const  Interest = document.getElementById("Interest").value;
const  loanTerm = document.getElementById("loanTerm").value;
const result = document.getElementById("result");
const monthlyRate = (Interest / 100) / 12;
const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
(Math.pow(1 + monthlyRate, loanTerm) - 1);
    result.innerHTML =`${monthlyPayment.toFixed(2)} is the monthly intrest`;
    console.log(loanAmount,Interest,loanTerm)

}
//*Math.pow((1+loanTerm,loanAmount))