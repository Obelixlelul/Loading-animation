const percent = document.querySelector('.percent');
const progressBar = document.querySelector('.progress');
const text = document.querySelector('.text');



let count = 4;
let per = 16;
let loading = setInterval(animate, 50);

function animate(){
    if (count == 100 && per == 400){
        percent.classList.add('text-blink');
        clearInterval(loading);
        text.style.display = 'block';
    }else{
        per += 4;
        count += 1;
        progressBar.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}

