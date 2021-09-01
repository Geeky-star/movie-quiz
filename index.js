var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("Have you watched shershah? -  ");

var questions = [
  {
    question: "Who played the role of shershaah in movie?  ",
    answer: "Sidharth Malhotra"
  },
  {
    question: "Who played the role of Dimple Cheema in movie? ",
    answer: "Kiara Advani"
  },
  {
    question: "In which year kargil war took place? ",
    answer: "1999"
  },
  {
    question: "What was the team name of shershah? ",
    answer: "delta"
  }
];


if (userName==="Yes" || userName=="yes"){
  console.log("OK, Let's start the quiz then.  ");
  
for(var i=0;i<questions.length;i++){
  playQuiz(questions[i].question,questions[i].answer);
}

}




function playQuiz(question,answer){
 
 var readAnswer = readlineSync.question(question);

   if(readAnswer==answer){
     score=score+1;
     console.log("correct!");
   }else{
     console.log("wrong!!");
   }

   console.log("score is - ",score);
   console.log("----------------------------");
 


}

console.log("Your total score is - ",score);