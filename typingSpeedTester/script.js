const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval; // to stop the clock later
var timerRunning = false; // to control timer when test is done

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTimer = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTimer;
    timer[3]++;

    timer[0] = Math.floor(timer[3]/100/60); // minute = second / 60
    timer[1] = Math.floor(timer[3]/100 - (timer[0] * 60)); // second
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); // hundred of a second
}


// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    // console.log(textEntered);

    // The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval); // stop the clock when test returns true
        testWrapper.style.borderColor = "green";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "blue";
        } else {
            testWrapper.style.borderColor = "orange";
        }
    }
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if ( textEnteredLength === 0 && !timerRunning) {
        timerRunning = true; // to prevent the clock from continuing when test is done
        interval = setInterval(runTimer, 10); // run interval every thousand of a second
    }
}

// Reset everything:
function reset() {
    clearInterval(interval); // sure browser not running an interval at background after we start a new one
    interval = null; // not new interval with new index interval
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = ""; // clear test area
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener('keypress', start, false);
testArea.addEventListener('keyup', spellCheck, false);
resetButton.addEventListener('click', reset, false);