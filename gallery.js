//Gallery
function openImage(imgElement) {
    var modal = document.getElementById("imageModal");
    var expandedImg = document.getElementById("expandedImg");
    var imgCaption = document.getElementById("imgCaption");

    expandedImg.src = imgElement.src;
    imgCaption.innerHTML = imgElement.alt;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


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
