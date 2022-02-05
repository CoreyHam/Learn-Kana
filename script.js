let timer = 10;
var timerDisplay = document.getElementById('time');

function startTimer(){
    var sec = 10;
    timer = setInterval(() =>{
        timerDisplay.innerHTML = sec;
        sec--;
        if (sec == -1){
            clearInterval(timer)
            timerDisplay.innerHTML = "TIMES UP!"
        }
    }, 1000)
}

document.getElementById('timerButton').addEventListener("click", startTimer);
