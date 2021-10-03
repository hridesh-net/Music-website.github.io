function open_nav() {
    document.getElementById("hamburger").style.transition = "all 1s ease-out";
    document.getElementById("hamburger").style.width = "100%";
    document.getElementById("options").style.width = "100%";
    document.getElementById("hamburger").style.height = "100%";
    document.getElementById("options").style.height = "100%";
    document.getElementById("options").style.transition = "all 2s ease-out";
    // document.getElementsByClassName("show").style.display = "flex";
}

function close_nav() {
    document.getElementById("hamburger").style.width = "0"
    document.getElementById("options").style.width = "0"
    document.getElementById("hamburger").style.height = "0"
    document.getElementById("options").style.height = "0"
        // document.getElementsByClassName("show").style.display = "none";
}

const mBtn = document.querySelector('#m-btn');
const list = document.querySelector('ul')
const list_op = document.querySelector('#options')
let menuOpen = false;
mBtn.addEventListener('click', () => {
    if (!menuOpen) {
        mBtn.classList.add('open');
        list.classList.add('show');
        open_nav();
        menuOpen = true;
    } else {
        mBtn.classList.remove('open');
        list.classList.remove('show')
        close_nav();
        menuOpen = false;
    }
})