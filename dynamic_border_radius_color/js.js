const input = document.querySelector('#dynamic_input');
const box = document.querySelector('.box');
input.addEventListener('input',function(){
    var px = input.value.search('px');
    var per = input.value.search('%');
    if(input.value != ""){
        if(px != -1 || per != -1){
            console.log('px');
            box.style.borderRadius = input.value;
        }else{
            console.log('bg');
            box.style.backgroundColor = input.value;
        }
    }else{
        box.style.borderRadius = 0;
        box.style.backgroundColor = "#fff";
    }

});