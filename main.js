// setTimeout(function(){
//     alert("Hello");
// }, 3000);

let s = 0;
let opacity = 1;
let blur = 10;

wrapp.style.filter = 'blur('+blur+'px)';

setInterval(function(){
    if(s < 100){
        s++;
        console.log(s + "%");
        progress.innerHTML = s + "%";

        opacity = opacity - 0.008;
        progress.style.opacity = opacity;

        blur = blur + - 0.1;
        wrapp.style.filter = 'blur('+blur+'px)';
        row.style.width = s+'%';
        row.style.transition = '0.2s';
    }else{
        progress.style.display = 'none';
        row.style.display = 'none';
    }
}, 100);