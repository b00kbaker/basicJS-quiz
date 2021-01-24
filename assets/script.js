var questionsArray= [
 {question: "Which primitive data type is only defined as either true or false?",
    options: ["Boolean", "String", "Number"],
    correct: "Boolean"},

 {question: "Groups of data displayed within [] are called?",
    options: ["Strings", "Arrays", "Objects"],
    correct: "Arrays"},

 {question: "Array indexes begin at '1'.",
    options: ["True", "False", "Either"],
    correct: "False"},

 {question: "A global variable is declared within---.",
    options: ["A method", "the Javascript file before functions", "an array"],
    correct: "the Javascript file before functions"},

 {question: "Which one is a property?",
    options:["candy: caramel", "console.log(Yum)", "(vanilla || chocolate)"],
    correct: "candy: caramel"},
];

var currentQuestion = -1
var score= 0;
var remainingTime= 0;
var timer;



 
document.getElementById("start").addEventListener("click", function(event) {
    event.preventDefault
    var opening = document.getElementById("first");
    opening.classList.add("hide");
    var scroll = document.querySelector("#quiz-q");
    if (scroll.classList.contains("hide")) {
    scroll.classList.remove("hide");
    } 
    countDown();
});

document.getElementById("next").addEventListener("click", function(event) {
    event.preventDefault
    showQuestion();

});



function showQuestion() {
    currentQuestion++; 
    if (currentQuestion > questionsArray.length - 1) {
        endGame();
        return;
    }
    
    let quizContent = "" + questionsArray[currentQuestion].question + ""
    
    for (let buttonLoop = 0; buttonLoop < questionsArray[currentQuestion].options.length; buttonLoop++) {
        let buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questionsArray[currentQuestion].options[buttonLoop]);
        if (questionsArray[currentQuestion].options[buttonLoop] == questionsArray[currentQuestion].correct) {
            buttonCode = buttonCode.replace("[ANS]", "correctAnswer()");
        } 
        else {
            buttonCode = buttonCode.replace("[ANS]", "wrongAnswer()");
        }
        quizContent += buttonCode
    }
    document.getElementById("question-space").innerHTML = quizContent
};


function countDown() {
    remainingTime= 60;
    document.getElementById("remainingTime").innerHTML=remainingTime;

    timer = setInterval(function() {
        remainingTime --;
        document.getElementById("remainingTime").innerHTML=remainingTime;
        if (remainingTime <= 0){
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
    showQuestion();
}

function wrongAnswer(){
remainingTime -= 10;
return showQuestion();
}

function correctAnswer(){
score = remainingTime;
return showQuestion();
}

function gameOver() {
    clearInterval(timer);
    var highscoreSectionEl= document.getElementById("finished-section");
    highscoreSectionEl.setAttribute("class", "show");

    var finalScoreEl= document.getElementById("final-score");
    finalScoreEl.textContent = time;
    
    var scroll = document.querySelector("#quiz-q");
    scroll.classList.add("hide");
    
}

function saveScore(){
    
}

function listScore(){

}

function clearScore(){

}

function  newGame(){

}




    