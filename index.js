// Greeting text animation

const textArray = ["Welcome to my website!", "This is Ayisha Baterina"];
let textIndex = 0;  
let charIndex = 0;  
let isDeleting = false;  

const typingSpeed = 80;  
const deletingSpeed = 50;  
const delayBetweenTexts = 1000;  

function type() {
    const element = document.getElementById("greeting");  
    const currentText = textArray[textIndex];  

    if (!isDeleting && charIndex < currentText.length) {
        element.innerHTML = currentText.substring(0, charIndex + 1);  
        charIndex++;  
        setTimeout(type, typingSpeed);  

    } else if (isDeleting && charIndex > 0) {
        element.innerHTML = currentText.substring(0, charIndex - 1);  
        charIndex--;  
        setTimeout(type, deletingSpeed);  

    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true; 
        setTimeout(type, delayBetweenTexts);  

    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;  
        textIndex = (textIndex + 1) % textArray.length;  
        setTimeout(type, typingSpeed);  
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


//Scroll to top button

let mybutton =document.getElementById("myBtn");

window.onscroll =function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}