var arr = document.querySelectorAll('.anim li');
var header = document.querySelector('header');
var counter = 0;

var result = setInterval(() => {
    arr[counter].className = "bg";
    counter++;
    if (!(counter < arr.length)) {
        setTimeout(() => {
            header.className = "";
        }, 400);
        clearInterval(result);
    }
}, 400);