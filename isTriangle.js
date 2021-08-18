var angles=document.querySelectorAll("input");
var outputbtn=document.querySelector(".btn");
var output=document.querySelector(".output");

outputbtn.addEventListener('click',checkTriangle);
console.log(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
function checkTriangle(){
    var sum=Number(angles[0].value)+Number(angles[1].value)+Number(angles[2].value);
    if(sum===180){
        output.innerHTML="Yay !! It's a triangle!!😁"
    }
    else{
        output.innerHTML="Sorry it's not a triangle😔";
    }

}
