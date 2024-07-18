const input = document.querySelector('#pass');
const msg = document.querySelector('#msg');
const generate_password_checkbox = document.querySelector('#is_generate');
const generate_password_btn = document.querySelector('#generate_password');
const pass_length_input = document.querySelector('#pass_length');

input.addEventListener('input',function(){
    var pass = this.value;
    msg.textContent  = '';
    const smallabc = /[a-z]/;
    const bigabc = /[A-Z]/;
    const numaric = /[0-9]/;
    const regex = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
    if(pass.length > 0){
        if(pass.indexOf(' ') == -1){
            var is_strongPass = false;
                // small char check
                if(pass.search(smallabc) != -1){
                    console.log('smallabc ',pass.search(smallabc));
                    is_strongPass = true;
                }else{
                    is_strongPass = false;
                    msg.style.color = 'red';
                    msg.textContent = 'Password in add small char';      
                }

                // big char check
                if(pass.search(bigabc) != -1){
                    console.log('bigabc',pass.search(bigabc));
                    is_strongPass = true;
                }else{
                    is_strongPass = false;
                    msg.style.color = 'red';
                    msg.textContent = 'Password in add Big char';      
                }

                // number check
                if(pass.search(numaric) != -1){
                    console.log('numaric',pass.search(numaric));
                    is_strongPass = true;
                }else{
                    is_strongPass = false;
                    msg.style.color = 'red';
                    msg.textContent = 'Password in add Numaric char';      
                }

                // special char check
                if(pass.search(regex) != -1){
                    console.log('regex',pass.search(regex));
                    is_strongPass = true;
                }else{
                    is_strongPass = false;
                    msg.style.color = 'red';
                    msg.textContent = 'Password in add Special char';      
                }

                if(pass.search(smallabc) != -1 && pass.search(bigabc) != -1 && pass.search(numaric) != -1 && pass.search(regex) != -1){
                    msg.style.color = 'green';
                    msg.textContent = 'Password is strong';

                    if(pass.length < 8){
                        msg.style.color = 'red';
                        msg.textContent = `Password is very week because you password length is ${pass.length} so length greater than or equal 8`;
                    }
                }

          
        }else{
            msg.style.color = 'red';
            msg.textContent = 'Password in not add white space';            
        }
    }else{
        msg.style.color = 'red';
        msg.textContent = 'Password Field is required';
    }
});

generate_password_checkbox.addEventListener('click',function(){
    if(this.checked){
        generate_password_btn.classList.remove("hidden");
        pass_length_input.classList.remove("hidden");
    }else{
        generate_password_btn.classList.add("hidden");
        pass_length_input.classList.add("hidden");
    }
});

generate_password_btn.addEventListener('click',function(){
    const char = 'abcdefghijklmnopqrshuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+';
    let pass_length = pass_length_input.value;
    msg.textContent  = '';
    if(pass_length > 7 && pass_length < 21){
        let randam_pass = '';
        for (let index = 0; index < pass_length; index++) {
            randam_pass += char.charAt(Math.floor(Math.random()*char.length));
        }
        input.value = randam_pass;
    }else{
        msg.style.color = 'red';
        msg.textContent = 'Enter length between 8 to 20';
    }

});