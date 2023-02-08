const nav_home = document.getElementById("nav_home")
const nav_about = document.getElementById("nav_about")
const nav_skill= document.getElementById("nav_skill")



nav_home.addEventListener("click",()=>{
    nav_home.style.backgroundColor="red"
    nav_about.style.backgroundColor="white"
    nav_skill.style.backgroundColor="white"
})

nav_about.addEventListener("click",()=>{
    nav_about.style.backgroundColor="red"
    nav_home.style.backgroundColor="white"
    nav_skill.style.backgroundColor="white"
})
nav_skill.addEventListener("click",()=>{
    nav_skill.style.backgroundColor="red"
    nav_home.style.backgroundColor="white"
    nav_about.style.backgroundColor="white"
})