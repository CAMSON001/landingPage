let menuInfo = document.querySelector(".menuActive");
let menuHam = document.querySelector(".menu");
let title = document.querySelector(".title");
let body = document.querySelector(".body")


menuHam.onclick= ()=>{
    menuInfo.classList.toggle("active")
    menuHam.classList.toggle("active")
    title.classList.toggle("active")
}

body.onclick = ()=>{
    menuInfo.classList.remove("active")
    menuHam.classList.remove("active")
}

