//Tabs for interests section
const tabs = document.querySelectorAll('.title');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(`#content-${tab.id.split('-')[1]}`).classList.add('active');
    });
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