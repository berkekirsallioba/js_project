const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('mins');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');


const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);

        const seconds = Math.floor(totalSeconds % 60) ;
        const mins  = Math.floor(totalSeconds / 60) % 60;
        const hours  = Math.floor(totalSeconds / 3600) % 24;
        const days  = Math.floor(totalSeconds / 3600 / 24);
        
        secondsEl.innerHTML = seconds;
        minutesEl.innerHTML = mins;
        hoursEl.innerHTML = hours;
        daysEl.innerHTML = days;

}

countdown();
setInterval(countdown,1000);