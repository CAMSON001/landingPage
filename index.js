let menuInfo = document.querySelector(".menuActive");
let menuHam = document.querySelector(".menu");
let title = document.querySelector(".title");


menuHam.onclick= ()=>{
    menuInfo.classList.toggle("active")
    menuHam.classList.toggle("active")
    title.classList.toggle("active")
}

