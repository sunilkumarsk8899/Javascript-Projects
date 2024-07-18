const input = document.querySelector('#pass');
const msg = document.querySelector('#msg');
input.addEventListener('input',function(){
    inputValue = this.value;
    if(inputValue.length > 0){
        if(inputValue.search('/[a-z]/')){}
    }else{
        msg.style.color = "red";
        msg.textContent = 'Enter Password';
    }
});