var questionsArray= [questionOne, questionTwo, questionThree, questionFour, questionFive]

var questionOne = {
    question: "Which primitive data type is only defined as either true or false?",
    options: "Boolean, String, Number",
    correct: "Boolean"
};

var questionTwo = {
    question: "Groups of data displayed within [] are called?",
    options: "Strings, Arrays, Objects, Variables",
    correct: "Arrays"
};

var questionThree = {
    question: "Array indexes begin at '1'.",
    options: "True, False",
    correct: "False"
};

var questionFour = {
    question: "A global variable is declared within---.",
    options: "A method, A function, the Javascript file before functions, an array",
    correct: "the Javascript file before functions"
};

var questionFive = {
    question: "Which one is a property?",
    options: "var chocolate, candy: caramel, console.log(Yum), (vanilla || chocolate)"
};

 
// When "start" button is clicked start 60 second countdown timer and go through questionsArray starting at 0 ending at 4 (then bring up final "Congrats" screen with finishing time and push to High Scores) UNLESS timer runs out 0 then cut to "Lost" screen/try again

// Timer function


//Questions function accessing questionsArray index

// Wrong answer -10 sec, if time = 0 go to "Lost"

// List function for high scores (localstorage)

