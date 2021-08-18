 const quizForm=document.querySelector('.quiz-form');
 const submitBtn=document.querySelector('#submitbtn');
 const output=document.querySelector('#oparea');

 const correctAnswers=["90°","right angled","3","one right angle","Equilateral triangle","3","2"];

 function calculateScore(){
     var score=0;
     var index=0;
     const formResults= new FormData(quizForm);
     for(let value of formResults.values()){
         if(value===correctAnswers[index]){
             score++;
         }
         index++;
     }
     if(score===7)
     output.innerHTML="Hurray Your score is "+score+"!! ";
     else{
        output.innerHTML="Your score is "+score+"!! ";
     }
 }

 submitBtn.addEventListener('click',calculateScore);
