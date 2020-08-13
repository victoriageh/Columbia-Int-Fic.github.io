

//Scripting for splash screen to disappear automatically
const splash = document.querySelector('.splash');

var splashy = document.getElementById('splash');
if(splashy) {
    splashy.addEventListener('pressSpace', checkSpacePress, false); 
}


//In this function, when spacebar is pressed, the alert doesn't show
//but code proceeds to the next function. 
function checkSpacePress(key) {
    if(key.keyCode == "32") {
        alert("SPACE!"); 
    }
}

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 4000); //This number indicates how long the splash overlay will stay
})


/* const splash = document.querySelector('.splash');

var splashy = document.getElementById('splash');
if(splashy) {
    splashy.addEventListener('pressSpace', checkSpacePress, false); 
}
function checkSpacePress(key) {
    if(key.keyCode == "32") {
        setTimeout(()=>{
            splash.classList.add('display-none');
        }, 4000); //This number indicates how long the splash overlay will stay 
    }
} */
