const year = document.querySelector('#year');
const day = document.querySelector('#day-box');
const h = document.querySelector('#hr-box');
const m = document.querySelector('#min-box');
const s = document.querySelector('#sec-box');

const date = new Date();
console.log(date.getFullYear());

function countdown(){
    year.textContent = date.getFullYear();
    var currentdate = new Date();
    var newyeardate = new Date('1/01/2025');
    // get total seconds between the times
    var delta = Math.abs(newyeardate - currentdate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
    console.log(days,hours,minutes,seconds);

    day.textContent = days;
    h.textContent = hours;
    m.textContent = minutes;
    s.textContent = seconds;

    if(days <= 0 && hours <= 0 && minutes <= 0){
        document.querySelector('.countdown').style.display = 'none';
        return 'Happy New Year';
    }
    setTimeout(() => {
        countdown();
    }, 1000);
    
}
countdown();
