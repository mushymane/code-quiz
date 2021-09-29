# Code Quiz

## Description
Test your JavaScript knowledge with a quick coding quiz. This site provides multiple choice questions for the user to answer within a time limit. Initials and scores are saved to the highscores.

To view the web page visit this [link](https://mushymane.github.io/code-quiz/)

## Preview
![alt preview](assets/preview.png)

## Technologies Used
- HTML - used to structure and create elements on the DOM
- CSS - styles the HTML elements on page
- JavaScript - provides the site's functionality
- Git - version control
- Github - where the repository is hosted
- Visual Studio Code - text editor

## Code Snippet
runGame() function
```
function runGame() {
    timeLeft = 200; 
    currentQuestionIndex = 0;
    currentQuestion = questions[currentQuestionIndex];
    completed = false;
    score = 0;
    setTimeText();
    if (timeLeft === 0 || completed === true) {
        gameOver();
    } else {
        displayQuestion();
    }
}
```

## Author Links
[LinkedIn](https://www.linkedin.com/in/luigilantin/)
[Github](https://github.com/mushymane)