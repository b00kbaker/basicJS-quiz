var questionsArray= [
 {question: "Which primitive data type is only defined as either true or false?",
    options: "Boolean, String, Number",
    correct: "Boolean"},

 {question: "Groups of data displayed within [] are called?",
    options: "Strings, Arrays, Objects",
    correct: "Arrays"},

 {question: "Array indexes begin at '1'.",
    options: "True, False, Either",
    correct: "False"},

 {question: "A global variable is declared within---.",
    options: "A method, the Javascript file before functions, an array",
    correct: "the Javascript file before functions"},

 {question: "Which one is a property?",
    options: "candy: caramel, console.log(Yum), (vanilla || chocolate)",
    correct: "candy: caramel"},
];

var quizOutput= [];
var currentIndex= 0;
var answersEl= document.getElementById("answers");

 
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
    var currentQ= questionsArray[currentIndex];
    var questionEl= document.getElementById("question-space");
    // questionEl.textContent= currentQ.question;
    var potential = document.getElementById("potenial-answers");
    // potential.innerHTML="";

    currentQ.options.forEach(function(option, i){
    var optionEL= document.createElement("button");
    optionEl.setAttribute("class", "choice");
    optionEl.setAttribute("value", choice);

    optionEl.textContent= i + 1 + "." + choice;

    optionEL.onclick = optionClick;

    potential.appendChild(optionEL);
    })
 console.log(currentQ.question);
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
