let minutes = 25;
let seconds = 0;
let isRunning = false;
let timer;

// Get the audio element
const timerSound = document.getElementById("timerSound");

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
        document.getElementById("startBtn").innerHTML = "Pause";
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById("startBtn").innerHTML = "Resume";
    }
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startBtn").innerHTML = "Start";
        alert("Pomodoro finished! Take a break!");
        // Play the sound when the timer reaches zero
        timerSound.play();
        resetTimer();
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    document.getElementById("startBtn").innerHTML = "Start";
}

function updateDisplay() {
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}
