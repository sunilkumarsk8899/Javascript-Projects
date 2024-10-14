var num1 = '';
var num2 = '';
var symbol = '';
var userAns_result = '00';
var time = 60;
var userCorrectAns = 0;
var userInCorrectAns = 0;
var userSkipQuestion = 0;
var num = 0;

function checkGameIsStart(){
    if(localStorage.getItem("is_start") == 'true'){
        $('.start-container').hide();
        console.log(localStorage.getItem("is_start"));
    }else{
        $('.start-container').show();
        $('.start-container').animate({
            width: '100%'
        });  
    }
}
checkGameIsStart();


/** start game */
$(document).on('click','#start-game-button',function (e) { 
    e.preventDefault();
    if(localStorage.getItem("is_start") !== true){
        console.log('start game');
        $('.final-container').remove();
        $('.game-container').show();
        $('.start-container').animate({
            width: 0
        });  
        setTimeout(() => {
            $('.start-container').hide();
        }, 400);
        randomMathQuestion();
        localStorage.setItem("is_start", true);
        startTimer();
    }
 });


 if(localStorage.getItem("is_start") == 'true'){
    startTimer();
 }
 

 /** start timer */
 function startTimer(){
    // if(localStorage.getItem("is_start") == 'true'){
        setTimeout(() => {
            if(time == 0 || time < 0){
                console.log('game over');
                $('.game-container').hide();
                $('.timer').hide();
                var final_div = document.createElement('div');
                final_div.className = 'final-container';
                final_div.innerHTML = `<h1>Game Over!</h1><p>Final Score: ${userCorrectAns}</p><p>InCourrect Score: ${userInCorrectAns}</p><p>Skip Score: ${userSkipQuestion}</p></br><button class="reset btn btn-primary">Restart Game!</button>`;
                $('body').append(final_div);
                console.log('result here',userCorrectAns,userInCorrectAns,userSkipQuestion);
                userCorrectAns = 0;
                userInCorrectAns = 0;
                userSkipQuestion = 0;
                return;
            }
            time--;
            $('.timer').text((time < 10) ? '0'+time : time);
            startTimer();
            // console.log('run');
            
        }, 1000);
    // }
 }


 /** generate random math question */
 function randomMathQuestion(){
    const math = ['/','*','-','+','%'];
    const getMatch = Math.floor(Math.random() * 4) + 1;
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    symbol = math[getMatch];
    $('#random-question').text(num1+' '+ math[getMatch] +' '+num2);
 }

 /** enter onclick to generate random question */
 $(document).on('click','.btn-enter',function(e){
    e.preventDefault();
    checkAns();
    randomMathQuestion();
 });

 $(document).keyup(function (e) { 
    e.preventDefault();
    if(e.keyCode == 13){
        checkAns();
        randomMathQuestion();
    }
 });
 

 /** ans check correct or not */
 function checkAns(){
    let userAns = $('#calculation').val();
    let random_generate_question = Math.abs(eval(`${num1} ${symbol} ${num2}`));
    let user_res = '';
    if(Number(userAns) > 0){
        if(Number(userAns) == Number(random_generate_question)){
            console.log('correct');
            user_res = ++userAns_result;
            ++userCorrectAns;
        }else{
            console.log('incorrect');
            user_res = --userAns_result;
            ++userInCorrectAns;
        }
    }else{
        console.log('skip');
        ++userSkipQuestion;
    }
    user_res = (userAns_result < 0) ? 0 : user_res;
    $('#result').text(user_res);
    $('#calculation').val('');
 }

 /** Received number on button click */
 $(document).on('click','.btn_number',function(e){
    e.preventDefault();
    num = $(this).attr('data-num');
    document.getElementById('calculation').value += num;
 });

 $(document).on('keydown',function(e){
    console.log(e.keyCode);
    const key_code = {
                    96 : 0,
                    97 : 1,
                    98 : 2,
                    99 : 3,
                    100 : 4,
                    101 : 5,
                    102 : 6,
                    103 : 7,
                    104 : 8,
                    105 : 9
    };
    if(e.keyCode >= 96 && e.keyCode <= 105){
        num = key_code[e.keyCode];
        document.getElementById('calculation').value += num;
    }
    if(e.keyCode == 46){
        let val = $('#calculation').val();
        console.log(val.substr(0, val.length - 1));
        $('#calculation').val(val.substr(0, val.length - 1));
    }
 });

 /** reset */
 $(document).on('click','.reset',function(e){
    e.preventDefault();
    if(confirm('Are you sure!')){
        localStorage.setItem('is_start','false');
        checkGameIsStart();
        time = 60;
        location.reload();
    }
 });
 
/** delete number */
 $(document).on('click','.del',function(){
    let val = $('#calculation').val();
    console.log(val.substr(0, val.length - 1));
    $('#calculation').val(val.substr(0, val.length - 1));
 });

 /** 
  * workin on tomorrow add timer  -> done
  * add restart button -> done
  * add previes question get funcinality
  * show result end of time how many question attemped,skip,correct,incorrect -> done
  */