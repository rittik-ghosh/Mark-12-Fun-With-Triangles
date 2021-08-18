var sides=document.querySelectorAll("input");
var outputbtn=document.querySelector(".btn");
var output=document.querySelector(".output");

outputbtn.addEventListener('click',calculateArea);

function calculateArea(){
    console.log(sides[0].value);
    console.log(sides[1].value);
    console.log(sides[2].value);
    var a =Number(sides[0].value);
    var b =Number(sides[1].value);
    var c =Number(sides[2].value);
    var s= (a+b+c)/2;
    console.log(s);
    var area =Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
    var op=area.toFixed(2);
    output.innerHTML="Area of a triangle using heron's formula is "+op+" units."
}