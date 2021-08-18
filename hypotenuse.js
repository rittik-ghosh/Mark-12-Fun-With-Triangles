var sides=document.querySelectorAll("input");
var outputbtn=document.querySelector(".btn");
var output=document.querySelector(".output");

outputbtn.addEventListener('click',calculateHypo);

function calculateHypo(){
    var a= sides[0].value;
    var b=sides[1].value;
    var c = (Math.sqrt(a*a + b*b));
    var d=c.toFixed(2)
    output.innerHTML="The hypoteneuse of the triangle is "+d;
}