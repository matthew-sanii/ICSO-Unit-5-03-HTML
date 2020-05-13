// JavaScript File
let response=document.getElementById("response");
function Click() {
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue=Number(answer.value); // This turns the number you guess from a string to a number
  if (answerValue>=17) { // This if statement checks to see if the diameter is less than 0, or had a letter in it when the button was clicked
    document.getElementById("myimage").src="./images/R.png";
    response.innerHTML="You can see an R-rated movie alone";
  }
  else if (answerValue>=13){
    document.getElementById("myimage").src="./images/PG-13.png";
    response.innerHTML="You can watch a PG-13 movies alone";
  }
  else if (answerValue>=5){
    document.getElementById("myimage").src="./images/PG.png";
    response.innerHTML="You can watch a G or PG movie alone.";
  }
  else {
    document.getElementById("myimage").src="./images/X.png";
    response.innerHTML="You're too young to watch most movies.";
  }
}