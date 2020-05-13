// JavaScript File
let response=document.getElementById("response");
function Click() {
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue=Number(answer.value); // This turns the age you input from a string to a number
  if (answerValue>=17) { // This if statement checks to see if your age is over or equal to 17
    document.getElementById("myimage").src="./images/R.png";
    response.innerHTML="You can see an R-rated movie alone";
  }
  else if (answerValue>=13) { // This else if statement checks to see if your age is over or equal to 13
    document.getElementById("myimage").src="./images/13-1.png";
    response.innerHTML="You can watch a PG-13 movies alone";
  }
  else if (answerValue>=5) { // This else if statement checks to see if your age is over or equal to 5
    document.getElementById("myimage").src="./images/PG.png";
    response.innerHTML="You can watch a G or PG movie alone.";
  }
  else { 
    document.getElementById("myimage").src="./images/X.png";
    response.innerHTML="You're too young to watch most movies.";
  }
}