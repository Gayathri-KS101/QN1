function checkAnswer() {
    var userAnswer = document.getElementById("answerInput").value.toLowerCase();
    var correctAnswer = "queue";

    if (userAnswer === correctAnswer) {
        alert("Congratulations! You got it right! Your next hint is at: above stage(cad lab) ");
        
    } else {
        alert("Sorry, that's not correct. Try again!");
    }
}

