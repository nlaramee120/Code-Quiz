var startBtn = document.getElementById("startBtn");
var timeLeft = document.querySelector(".timeLeft");


var secondsLeft = 60

function countdown() {
 
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
        timeLeft.textcontent = secondsLeft

        if(secondsLeft === 0) {
            
            clearInterval(timerInterval);

            sendMessage()
        }
    }, 1000);
}


function sendMessage() {
    timeLeft.textcontent = " ";

}




startBtn.addEventListener("click", countdown);



countdown();