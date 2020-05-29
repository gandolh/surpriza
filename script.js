let countDown;

// background and style randomizer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let backgroundIndex = getRndInteger(1, 7);
const bodyEl = document.querySelector('body');
if (backgroundIndex == 1) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244))'; //light blue
    bodyEl.style.color = '#FEED9C';
} else if (backgroundIndex == 2) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(173, 83, 137), rgb(60, 16, 83))'; //violet
    bodyEl.style.color = '#C8FF8A';
} else if (backgroundIndex == 3) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(253, 200, 48), rgb(243, 115, 53))'; //orange
    bodyEl.style.color = '#277AB2';
} else if (backgroundIndex == 4) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))'; //darker blue
    bodyEl.style.color = '#FFB77A';
} else if (backgroundIndex == 5) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))'; //green
    bodyEl.style.color = '#071a52';
} else if (backgroundIndex == 6) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(248, 80, 50), rgb(231, 56, 39))'; //red
    bodyEl.style.color = '#9CFFC4';
} else if (backgroundIndex == 7) {
    bodyEl.style.background = 'linear-gradient(to right, rgb(72, 85, 99), rgb(41, 50, 60))'; //grey
    bodyEl.style.color = '#ededed';
}

// end design sh*t
//start timer
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
timer();

function timer() {
    const now = Date.now();
    const then = new Date(2020, 5, 25, 8, 0).getTime(); //year month(indexed from 0) days for the day for what you want the countdown
    displayTimeLeft(Math.round((then - now) / 1000));
    displayEndTime();
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        //
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24)
    const hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const remainderSeconds = seconds % 60;
    const display = `${days} zile ${hours} ore ${minutes} minute ${remainderSeconds<10 ? '0':''}${remainderSeconds} secunde`;
    timerDisplay.textContent = display;
}

function displayEndTime() {
    endTime.textContent = `Teroare incepe la: 08:00 / 25 06 2020`;
}
// end timer
