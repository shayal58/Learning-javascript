function palindrom(){
const Name =document.getElementById("Word").value;
const Reverse =Name.split('').reverse().join('');
const Word = document.getElementById("Paldindromtext")
if (Name==Reverse){
Word.innerHTML =`${Name} is palindrom`
}
else{
    Word.innerHTML=`${Name} is not palindrom`
}
}