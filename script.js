var startBtn = document.getElementById("startBtn");
var timeLeft = document.getElementById("timeLeft");
var questionDiv = document.getElementById("question-div");



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



