const startButton = document.getElementById("start");
const workButton = document.getElementById("workButton");
const breakButton = document.getElementById("breakButton");
const stopButton = document.getElementById("pause")
const clock = document.getElementById("timer");


let begin = 0;

let hasStarted = true;
let needsToResmue = false;

startButton.addEventListener("click", myFunction);

workButton.addEventListener("click", () => {
    begin = 25;
    clock.innerHTML = "25:00"
});
breakButton.addEventListener("click",() => {
    begin = 5;
    clock.innerHTML = "05:00"
});

function myFunction() {
    let Minutes = 60 * begin,
        display = document.querySelector('#timer');
    startTimer(Minutes, display);
}

function startTimer(duration, display) {
    let startTime = new Date()
    let timer = duration;
    let interval = setInterval(function () {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
       
         display.innerHTML = `${minutes}:${seconds}`;

       if (--timer < -1) {
            begin === 25 ? alert("time to take a break!"): alert("time to go back to work!");
            clearInterval(interval);
            display.innerHTML = '00:00';
        } 
        stopButton.addEventListener("click", ()=>{
            let remainingTime = begin - (new Date() - startTime)
            console.log(remainingTime)
            if (!hasStarted) {
            clearInterval(interval)
            hasStarted = true
            }
            else if (hasStarted && needsToResmue) {
                startTimer(remainingTime, display)
            }
        })



    }, 1);
    hasStarted = false
    needsToResmue = true
}



