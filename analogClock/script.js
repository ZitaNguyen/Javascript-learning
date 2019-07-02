const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// 360 degree / 12 hours on the clock face = segment to move
// add minPosition/12 increments in an hour
// so hour arm moves smoothly with each minute increased
let hrPosition = hr*360/12 + min*(360/60)/12;
// 360 degree / 60 minutes per hour = segment to move
// add secPosition/60 increments in a minute
// so minute arm moves smoothly with each second increased
let minPosition = min*360/60 + sec*(360/60)/60;
// 360 degree / 60 seconds per minute = segment to move
let secPosition = sec*360/60;

function runTheClock() {

    // hour arm moves a distance of 1 hour: 360/12 -> 30degree/1hour -> 30/3600seconds
    hrPosition = hrPosition+(3/360);
    // minute arm moves 1 degree over 60 seconds -> (1/60)*6
    minPosition = minPosition+(6/60);
    // add number of degree necessarie to display one second 360/60
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);