const text_elm = document.querySelector('.col');
const heading_arr = ['YouTube','Web Developer','Freelancer'];

var arrIndex = 0;
var sliceIndex = 1;
function updateText(arrIndex,sliceIndex,color){
    text_elm.innerHTML = `<h1>I am <span style="color: ${color};">${heading_arr[arrIndex].slice(0, sliceIndex)}</span></h1>`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


setInterval(() => {
        updateText(arrIndex,sliceIndex,getRandomColor());
        if (sliceIndex < heading_arr[arrIndex].length) {
            sliceIndex++;
        }else{
            if(heading_arr.length-1 != arrIndex){
                arrIndex++;
                sliceIndex = 0;
            }else{
                sliceIndex = 1;
                arrIndex = 0;
            }
        }
}, 400);

