var startBtn = document.getElementById("startBtn");
var timeLeft = document.getElementById("timeLeft");
var questionDiv = document.getElementById("question-div");
var questionContainerElement = document.getElementById("question-container");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");


function countdown() {

    var secondsLeft = 60
 
    var timerInterval = setInterval(function() {
        
        timeLeft.textcontent = secondsLeft;

        if (secondsLeft >= 1) {
        secondsLeft--;
        timeLeft.textContent = "Time Left: " + secondsLeft;
        }

       else if(secondsLeft === 0) {
            
            clearInterval(timerInterval);

        }
    }, 1000);
}

function startGame() {
    console.log('Started')
    startBtn.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    selectNextQuestion()
}

function selectNextQuestion() {


}


var questions = [
    {
        question: 'Commonly used data types do NOT include which of the following?',
        answers: [
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false},
            { text: 'booleans', correct: false},
            { text: 'strings', correct: false},
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store what?',
        answers: [
            { text: 'other arrays', correct: true },
            { text: 'numbers and strings', correct: false},
            { text: 'booleans', correct: false},
            { text: 'all of them', correct: false}, 
        ]
    }
]


























// let questions = [
//     {
//         "text": "Commonly used data types do NOT include which of the following?",
//         "options": ["strings", "booleans", "letters", "numbers"],
//         "solutions": "letters"
//     }
//     ]
    
//     function displayQuestion(q) {
//         let $text = $('<h3>').text(q("text"));
//         $("#question-div").append($text);
    
//         let opts = q["options"];
//         for (let i=0; i<opts.length; i++) {
//             let $option = $('<button/>').attr({ value: opts[i], class: 'question-option'});
//             $option.text(opts[i])
//             $("#question-div").append($option);
//         }
    
    
//     }
    
//     displayQuestion(questions[0]);
    
//     console.log(displayQuestion)

console.log(countdown)

startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", startGame)



// Commonly used data types do NOT include which of the following?
// strings
// booleans
// alerts
// numbers 

// Arrays in Javascript can be used to store 
// other arrays
// numbers and strings 
// booleans
// all of the above 

// The condition in a if/else statement is enclosed within
// quotes
// curly brackets
// parentheses
// square brackets

// String values must be enclosed within _______ when being assigned to variables.
// commas
// curly brackets
// quotes
// parentheses

// A very useful tool used during development and debugging for printing content to the debugger is:
// Javascript
// terminal/bash
// for loops
// console log
