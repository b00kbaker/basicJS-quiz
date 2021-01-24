var questionsArray= [
 {question: "Which primitive data type is only defined as either true or false?",
    options: ["Boolean, String, Number"],
    correct: "Boolean"},

 {question: "Groups of data displayed within [] are called?",
    options: ["Strings, Arrays, Objects"],
    correct: "Arrays"},

 {question: "Array indexes begin at '1'.",
    options: ["True, False, Either"],
    correct: "False"},

 {question: "A global variable is declared within---.",
    options: ["A method, the Javascript file before functions, an array"],
    correct: "the Javascript file before functions"},

 {question: "Which one is a property?",
    options:["candy: caramel, console.log(Yum), (vanilla || chocolate)"],
    correct: "candy: caramel"},
];

var quizOutput= [];
var currentIndex= 0;


 
document.getElementById("start").addEventListener("click", function(event) {
    event.preventDefault
    var opening = document.getElementById("first");
    opening.classList.add("hide");
    var scroll = document.querySelector("#quiz-q");
    if (scroll.classList.contains("hide")) {
    scroll.classList.remove("hide");
    } 
});

document.getElementById("next").addEventListener("click", function(event) {
    event.preventDefault
    showQuestion();

});


// function showQuestion(){
//     var currentQ= (questionsArray[0].question);
    // var questionEl= document.getElementById("question-space");
//     questionEl.textContent= currentQ.question;
//     var potential = document.getElementById("potential-answers");
//     potential.innerHTML="";

//     currentQ.options.forEach(function(option, i){
//     var choiceNode= document.createElement("button");
//     choiceNode.setAttribute("class", "choice");
//     choiceNode.setAttribute("value", option);

//     choiceNode.textContent= i + "." + option;

//     choiceNode.onclick = optionClick;

//     potential.appendChild(choiceNode);

//  });
// }

var currentQuestion = -1

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
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } 
        else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }
    document.getElementById("question-space").innerHTML = quizContent
    }