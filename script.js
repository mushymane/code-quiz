// TODO:

// start button (event listener) -> timer starts (upper left), show questions
// answers as buttons (event listener/stopPropagation?) 
// correct answer -> display message in footer, score ++
// wrong answer -> display message in footer, time - 5 seconds
// game over when all questions are answered or timer reaches 0
// card header - gj, display score, form for initials and submit button
// save initials and score to localstorage -> submit, taken to highscores page
// highscores page: show all highscores, go back and clear highscores buttons

var timeEl = document.querySelector("#time-left");
var cardEl = document.querySelector(".card");
var cardHeader = document.getElementsByClassName("card-header");
var cardContent = document.getElementById("card-content");
var cardFooter = document.getElementById("card-footer");
var startBtnEl = document.querySelector(".start-btn");

var timeLeft = 61;
var questionsAnswered = 0;
var currentQuestion;
var answered = false;
var score = 0;

// Answer: a4
var q1 = {
    question: "What is JavaScript used for?",
    a1: "To bring the world happiness",
    a2: "Creating website structure",
    a3: "Styling a website",
    a4: "Enabling functionality on a website",
    answer: function() {return this.a4}
}

// Answer: a3
var q2 = {
    question: "What is the file extension for a JavaScript file?",
    a1: ".json",
    a2: ".javascript",
    a3: ".js",
    a4: ".java",
    answer: function() {return this.a3}
}

// Answer: a2
var q3 = {
    question: "What is called to print something to the console?",
    a1: 'Console.WriteLine("Hello World!");',
    a2: 'console.log("Hello World!")',
    a3: 'print("Hello World!")',
    a4: 'System.out.println("Hello World!");',
    answer: function() {return this.a2}
}

// Answer: a1
var q4 = {
    question: "Which of the following is not a valid JavaScript data type:",
    a1: "int",
    a2: "undefined",
    a3: "string",
    a4: "number",
    answer: function() {return this.a1}
}

// Answer: a2
var q5 = {
    question: "How can we check for data type?",
    a1: "type(x)",
    a2: "typeof(x)",
    a3: "GetType(x)",
    a4: "Object.is(x, x)",
    answer: function() {return this.a2}
}

// Answer: a1
var q6 = {
    question: "Which of the following is NOT valid for defining functions:",
    a1: "def myFunction() {...}",
    a2: "function myFunction() {...}",
    a3: "let myFunction = function() {...}",
    a4: "var myFunction = () => ...",
    answer: function() {return this.a1}
}

// Answer: a2
var q7 = {
    question: "You must always include else after an if statement",
    a1: "True",
    a2: "False",
    answer: function() {return this.a2}
}

// Answer: a4
var q8 = {
    question: "Which of the following instantiates an empty array?",
    a1: "var arr = new Array[];",
    a2: "var arr = array();",
    a3: "arr = [];",
    a4: "var arr = [];",
    answer: function() {return this.a4}
}

// Answer: a1
var q9 = {
    question: "What is the difference between a function and a method?",
    a1: "A function is standalone whereas a method is associated with an object",
    a2: "Functions can be called an infinite number of times whereas methods only once",
    a3: "Methods must have parameters and functions can have no parameters",
    a4: "There is no difference",
    answer: function() {return this.a1}
}

// Answer: a2
var q10 = {
    question: "When is const used?",
    a1: "Only inside of a for loop",
    a2: "When we don't want the value to change",
    a3: "When we don't know which keyword to use",
    a4: "Exclusively on Chrome DevTools",
    answer: function() {return this.a2}
}

// Answer: a1
var q11 = {
    question: "Jerome is cool",
    a1: "True",
    a2: "False",
    answer: function() {return this.a1}
}

// Answer: a4
var q12 = {
    question: "What is this?",
    a1: "this... is... SPARTA!!!!!!!",
    a2: "The keyword that catches all errors",
    a3: "A way of accessing out of scope variables",
    a4: "Refers to the owner/global object, or refers to the element that received an event",
    answer: function() {return this.a4}
}

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

function displayQuestions() {
    cardHeader[0].children[1].innerHTML = "";

    var randomizedQuestions = [];
    for (let i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * questions.length);
        randomizedQuestions.push(questions[randomNumber]);
    }

    for (let i = 0; i < randomizedQuestions.length; i++) {
        // var answered = false;
        if (answered === false) {
            cardHeader[0].children[0].textContent = randomizedQuestions[i].question;
            document.getElementById("card-content").innerHTML = "";
            console.log(randomizedQuestions[i])
            createAnswerButtons(randomizedQuestions[i]);
        
            
        }
        continue;
    }
    cardContent.addEventListener("click", function(event) {
        var element = event.target;
        if (element.matches("button") === true) {
            // console.log("element:", element);
            // console.log("element id:", element.id);
            // console.log("answer:", randomizedQuestions[i].answer());
            if (element.textContent === randomizedQuestions[i].answer()) {
                score++;
                document.getElementById("card-footer").innerHTML = "Nicely done!";
                answered = true;
            } else {
                timeLeft -= 5;
                document.getElementById("card-footer").innerHTML = "Wrong!";
                answered = true;
            }
        }
    });
}

function setTimeText() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            // gameOver();
        }
      }, 1000);
}

function createAnswerButtons(obj) {
    // document.getElementById("card-content").innerHTML = "";

    var list = document.createElement("div");
    list.setAttribute("class", "btn-group");

    for (let answer in obj) {
        if (answer === "a1" || answer === "a2" || answer === "a3" || answer === "a4") {
            var listItem = document.createElement("button");
            listItem.setAttribute("id", answer);
            listItem.textContent = obj[answer];
            list.append(listItem);
        }
    }
    cardContent.append(list);

}

function runGame() {
    setTimeText();
    if (timeLeft === 0 || questionsAnswered === 10) {
        gameOver(); // implement
    } else {
        displayQuestions();
    }
}

function gameOver() {
    cardHeader.innerHTML = "<h1>Good job!</h1><h2>Your final score is " + score + "/10.</h2>";
    // const form = document.createElement("form");
    // TODO: finish
}

startBtnEl.addEventListener("click", function() {
    startBtnEl.style.display = "none";
    runGame();
});

