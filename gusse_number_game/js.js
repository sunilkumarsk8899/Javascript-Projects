const check_btn = document.querySelector('#check_btn');
const input = document.querySelector('#input_number');
const msg = document.querySelector('#msg');
const random_number = document.querySelector('#random_number');
let random_guess_number = '';
let score = document.querySelector('#score');
let highscore = document.querySelector('#highscore');
let time_sec = document.querySelector('#time_sec');
let time_min = document.querySelector('#time_min');
let scoreValue = 20;
var is_win = false;

let sec = 0;
let min = 1;
score.textContent = scoreValue;

// generate random number between 0 to 20
function randomNumberGenerate(){
    return Math.floor(Math.random() * 20) + 1;
}
random_guess_number = randomNumberGenerate(); // add random number in this variable

check_btn.addEventListener('click',function(){
    console.log(random_guess_number);
    let val = input.value;
    msg.textContent = '';
    time();
    // console.log(Number(val));
    if(val.length > 0 && Number(val) < 21){ // guess input value greater than 0 than enter this if condition
        if(Number(val) == Number(random_guess_number)){
            console.log(input.value,random_guess_number);
            msg.textContent = 'You Win';
            random_number.textContent = random_guess_number;
            random_guess_number = randomNumberGenerate(); // user win game than generate random number
            highscore.textContent = Number(score.textContent) + Number(highscore.textContent); // user win game than add high score
            document.body.style.backgroundColor = "green";
            document.body.style.color = "#fff";
            is_win = true;
            setTimeout(() => {
                random_number.textContent = "?";
            }, 2000);
        }else{
            is_win = false;
            if(scoreValue > 0){
                if(Number(val) > Number(random_guess_number)){ // user guess number lower than random number show msg
                    msg.textContent = 'Guess a higher number';
                    score.textContent = --scoreValue;
                    document.body.style.backgroundColor = "red";
                    document.body.style.color = "#fff";
                }else{ // user guess lower number less than  random number show msg
                    msg.textContent = 'Guess a lower number';
                    score.textContent = --scoreValue;
                    document.body.style.backgroundColor = "red";
                    document.body.style.color = "#fff";
                }
            }else{ // if user score 0 than user loss the game and reset game
                msg.textContent = 'You Lose';
                alert('You Loss Restart Your Game');
                window.location.reload();
            }
        }
    }else{ // if user not enter any number than show this msg
        msg.textContent = 'Enter Number between 0 to 20';
    }
});

function time(){
    let getTime = setInterval(() => {
        // console.log(is_win);
        if(is_win){
            // clearInterval(getTime);
            // console.log('win');
            return;
        }
        if(sec > 59){
            sec = 0;
            time_min.textContent = min++;
        }else{
            time_sec.textContent = sec++;  
            // console.log(sec++);
        }
    }, 1500);
}
