var questionsArray= [questionOne, questionTwo, questionThree, questionFour, questionFive];

var questionOne = {
    question: "Which primitive data type is only defined as either true or false?",
    options: "Boolean, String, Number",
    correct: "Boolean"
};

var questionTwo = {
    question: "Groups of data displayed within [] are called?",
    options: "Strings, Arrays, Objects",
    correct: "Arrays"
};

var questionThree = {
    question: "Array indexes begin at '1'.",
    options: "True, False, Either",
    correct: "False"
};

var questionFour = {
    question: "A global variable is declared within---.",
    options: "A method, the Javascript file before functions, an array",
    correct: "the Javascript file before functions"
};

var questionFive = {
    question: "Which one is a property?",
    options: "candy: caramel, console.log(Yum), (vanilla || chocolate)",
    correct: "candy: caramel"
};

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


function showQuestion(){
    var currentQuestion=questionsArray[currentIndex];
    var questionEl= document.getElementById("question-space");
    questionEl.textContent= questionsArray.question;
    var answers = document.getElementById("potenial-answers");
    // answers.innerHTML="";

    questionsArray.options.forEach(function(option, i){
    var optionEL= document.createElement("button");
    optionEl.setAttribute("class", "answers");
    optionEl.setAttribute("value", answers);

    optionEl.textContent= i + 1 + "." + choice;

    optionEL.onclick = optionClick;

    answers.appendChild(optionEL);
    })

};


 
        
    // questionSheet.textContent.questionsArray[questionThree];
    // console.log(questionSheet)

    // If scroll does NOT equal "hide" { display array[i]} in the questionSheet space AND a next button. DO Not scroll through index until "Next" is pushed.

    // Event listener on "next" move to next object in index
    


 

// When "start" button is clicked start 60 second countdown timer and go through questionsArray starting at 0 ending at 4 (then bring up final "Congrats" screen with finishing time and push to High Scores) UNLESS timer runs out 0 then cut to "Lost" screen/try again

// Timer function


//Questions function accessing questionsArray index

// Wrong answer -10 sec, if time = 0 go to "Lost"

// List function for high scores (localstorage)
