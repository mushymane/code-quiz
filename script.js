// TODO:
// timer
// questions - obj
// questions answered - int
// score - int

// start button -> timer starts (upper left), first question
// correct answer -> display message/wrong answer -> display message + subtract time
// game over when all questions are answered or timer reaches 0
// save initials and score -> submit, taken to highscores page

// highscores page: show all highscores, go back and clear highscores buttons
// var timeEl = document.querySelector("#time");
// var cardEl = document.querySelector(".card");
// var startBtnEl = document.querySelector(".start-btn");

var timeLeft = 60;
var questionsAnswered = 0;
var score = 0;



// startBtnEl.addEventListener("click", function() {
//     if (count > 0) {
//       count--;
//       setCounterText();
//     }
// });

function runGame() {

}

// Answer: a4
var q1 = {
    question: "What is JavaScript used for?",
    a1: "To bring the world happiness",
    a2: "Creating website structure",
    a3: "Styling a website",
    a4: "Allowing functionality on a website"
}

// Answer: a3
var q2 = {
    question: "What is the file extension for a JavaScript file?",
    a1: ".json",
    a2: ".javascript",
    a3: ".js",
    a4: ".java"
}

// Answer: a2
var q3 = {
    question: "What is called to print something to the console?",
    a1: 'Console.WriteLine("Hello World!");',
    a2: 'console.log("Hello World!")',
    a3: 'print("Hello World!)',
    a4: 'System.out.println("Hello World!");'
}

// Answer: a1
var q4 = {
    question: "Which of the following is not a JavaScript data type:",
    a1: "int",
    a2: "undefined",
    a3: "string",
    a4: "number"
}

// Answer: a2
var q5 = {
    question: "How can we check for data type?",
    a1: "type(x)",
    a2: "typeof(x)",
    a3: "GetType(x)",
    a4: "Object.is(x, x)"
}

// Answer: a1
var q6 = {
    question: "Which of the following is NOT valid for defining functions:",
    a1: "def myFunction() {...}",
    a2: "function myFunction() {...}",
    a3: "let myFunction = function() {...}",
    a4: "var myFunction = () => ..."
}

// Answer: a2
var q7 = {
    question: "You must always include else after an if statement",
    a1: "True",
    a2: "False"
}

// Answer: a4
var q8 = {
    question: "Which of the following instantiates an empty array?",
    a1: "var arr = new Array[];",
    a2: "var arr = array();",
    a3: "arr = []",
    a4: "var arr = [];"
}

// Answer: a1
var q9 = {
    question: "What is the difference between a function and a method?",
    a1: "A function is standalone while a method is associated with an object",
    a2: "Functions can be called an infinite number of times whereas methods only once",
    a3: "Methods must have parameters and functions can have no parameters",
    a4: "There is no difference"
}

// Answer: a2
var q10 = {
    question: "When is const used?",
    a1: "Only inside of a for loop",
    a2: "When we don't want the value to change",
    a3: "When we don't know which keyword to use",
    a4: "Exclusively on Chrome DevTools"
}

// Answer: a1
var q11 = {
    question: "Jerome is cool",
    a1: "True",
    a2: "False"
}

// Answer: a4
var q12 = {
    question: "What is this?",
    a1: "this... is... SPARTA!!!!!!!",
    a2: "The keyword that catches all errors",
    a3: "A way of accessing out of scope variables",
    a4: "Refers to the owner/global object, or refers to the element that received an event"
}