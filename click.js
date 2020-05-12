// JavaScript File
let response=document.getElementById("response");
function Click() {
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue=Number(answer.value); // This turns the number you guess from a string to a number
  if (answerValue>=17) { // This if statement checks to see if the diameter is less than 0, or had a letter in it when the button was clicked
    response.innerHTML="You can see an R-rated movie alone";
  }
  else if (answerValue>=13){
    response.innerHTML="You can watch a PG-13 movies alone";
  }
  else if (answerValue>=5){
    response.innerHTML="G or PG movie alone.";
  }
  else {
    response.innerHTML="Your too young for most movies.";
  }
}