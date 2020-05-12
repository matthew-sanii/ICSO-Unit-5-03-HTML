// JavaScript File
let response=document.getElementById("response");
function Click() {
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue=Number(answer.value); // This turns the number you guess from a string to a number
  if (answerValue<0) { // This if statement checks to see if the diameter is less than 0, or had a letter in it when the button was clicked
    response.innerHTML="This number is negative.";
  }
  else if (answerValue==0){
    response.innerHTML="The number is 0.";
  }
  else {
    response.innerHTML="This number is positive.";
  }
}