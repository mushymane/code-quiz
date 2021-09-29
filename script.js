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

var timeLeft = 200; //61
var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];
var completed = false;
var score = 0;

var highscoresArray = [];

// var randomizedQuestions = [];
// for (let i = 0; i < 10; i++) {
//     var randomNumber = Math.floor(Math.random() * questions.length);
//     randomizedQuestions.push(questions[randomNumber]);
// }

function displayQuestion() {
    cardHeader[0].children[1].innerHTML = "";
    console.log("score: ", score)
    console.log(questions.length)
    if (currentQuestionIndex > questions.length - 1) {
        completed = true;
        // gameOver();
    } else {
        console.log("question", currentQuestion)
        console.log("question index", currentQuestionIndex)
        currentQuestion = questions[currentQuestionIndex];
        currentQuestionIndex++;
        updateQuestion();
        createAnswerButtons(currentQuestion);
    }
}

function setTimeText() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if(timeLeft === 0 || completed === true) {
            clearInterval(timerInterval);
            gameOver();
        }
      }, 1000);
}

function updateQuestion() {
    document.getElementById("card-content").innerHTML = "";
    cardHeader[0].children[0].textContent = currentQuestion.question;
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

function nextQuestion(){
    // currentQuestionIndex += 1;
    // currentQuestion = questions[currentQuestionIndex];
    displayQuestion();
}

function runGame() {
    timeLeft = 200; //61
    currentQuestionIndex = 0;
    currentQuestion = questions[currentQuestionIndex];
    completed = false;
    score = 0;
    setTimeText();
    if (timeLeft === 0 || completed === true) {
        gameOver(); // implement
    } else {
        displayQuestion();
    }
}

function gameOver() {
    cardHeader[0].children[0].textContent = "Good job!";
    cardHeader[0].children[1].textContent = "Your final score is " + score + "/12."; // out of 10 for randomized
    cardContent.innerHTML = "";
    cardFooter.textContent = "";

    const form = document.createElement("form");
    form.setAttribute("id", "initials-form");
    form.setAttribute("method", "POST");
    form.setAttribute("onsubmit", "showHighscores()");

    const label = document.createElement("label");
    label.setAttribute("for", "initials-text");
    label.textContent = "Enter your initials: ";
    form.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials-text");
    input.setAttribute("name", "initials-text");
    input.setAttribute("placeholder", "e.g. JS");
    form.appendChild(input);

    // const submit = document.createElement("button");
    // submit.setAttribute("id", "submit-btn");
    // submit.textContent = "Submit";
    cardContent.appendChild(form)

}

function addScore() {
    localStorage.setItem("highscores", JSON.stringify(highscoresArray));
    showHighscores();
}

function showHighscores() {
    var currentHighscores = JSON.parse(localStorage.getItem("highscores"));
    cardHeader[0].children[0].textContent = "Highscores";
    cardHeader[0].children[1].textContent = "";
    document.getElementById("card-content").innerHTML = "";
    var list = document.createElement("ol");
    cardContent.append(list);

    for (let player in currentHighscores) {
        console.log(currentHighscores);
        console.log(player)
        var li = document.createElement("li");
        li.textContent = player + " - " + currentHighscores[player];
    
        list.appendChild(li);
    }
    cardContent.append(list);

    var buttons = document.createElement("div");
    buttons.setAttribute("class", "score-btns");

    var goBackButton = document.createElement("button");
    goBackButton.setAttribute("id", "main-page");
    goBackButton.textContent = "Go Back";
    buttons.append(goBackButton);

    var resetButton = document.createElement("button");
    resetButton.setAttribute("id", "reset");
    resetButton.textContent = "Reset Highscores";
    buttons.append(resetButton);

    cardFooter.append(buttons);
}

startBtnEl.addEventListener("click", function(event) {
    event.stopPropagation();
    startBtnEl.style.display = "none";
    runGame();
});

cardContent.addEventListener("click", function(event) {
    event.stopPropagation();
    var element = event.target;
    if (element.matches("button") === true) {
        if (element.textContent === currentQuestion.answer()) {
            score++;
            document.getElementById("card-footer").innerHTML = "Nicely done!";
            nextQuestion();
        } else {
            timeLeft -= 5;
            document.getElementById("card-footer").innerHTML = "Wrong!";
            nextQuestion();
        }
    }
});

// cardContent.addEventListener("click", function(event) {
//     event.stopPropagation();
//     var element = event.target;
//     if (element.matches(".submit-btn")) {
//         var storeInitials = document.getElementById("initials").value;
//         localStorage.setItem("todos", JSON.stringify(storeInitials));
//         // showHighscores();
//     }
// })

cardContent.addEventListener("submit", function(event) {
    event.preventDefault();

    var initialsText = document.querySelector("#initials-text").value;

    if (initialsText === "") {
        return;
    }

    var initialsAndScore = {
        intials: initialsText,
        score: score
    }

    highscoresArray.push(initialsAndScore);
    addScore();
});

cardFooter.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var element = event.target;

    if (element.matches("#main-page")) {
        cardHeader[0].children[0].textContent = "Code Quiz";
        cardHeader[0].children[1].textContent = "Answer the following JavaScript questions and beat the time limit. You get one point for answering correctly, and lose 10 seconds for answering incorrectly! Good luck!";
        document.getElementById("card-content").innerHTML = "";
        cardFooter.innerHTML = "";
        // startBtnEl.style.display = "flex";
        var startBtn = document.createElement("button");
        startBtn.setAttribute("class", "start-btn");
        startBtn.textContent = "Start Quiz";
        cardFooter.append(startBtn);
    } else if (element.matches("#reset")) {
        highscoresArray = [];
        addScore();
    }
});

