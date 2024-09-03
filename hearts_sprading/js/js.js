const body = document.querySelector('body');

body.addEventListener('mousemove',function(event){

    let x = event.offsetX;
    let y = event.offsetY;
    let elm = document.createElement('span');
    elm.style.left = x+'px';
    elm.style.top = y+'px';
    let size = Math.random()*100;
    elm.style.width = (size+5)+'px';
    elm.style.height = size+'px';
    body.appendChild(elm);
    setTimeout(() => {
        elm.remove();
    }, 3000);
    
});