const nav_home = document.getElementById("nav_home")
const nav_about = document.getElementById("nav_about")
const nav_skill = document.getElementById("nav_skill")
const nav_career = document.getElementById("nav_career")



nav_home.addEventListener("click", () => {
    nav_home.style.backgroundColor = "#0d6efd"
    nav_about.style.backgroundColor = "white"
    nav_skill.style.backgroundColor = "white"
    nav_career.style.backgroundColor="white"
    window.location.href = "#sec1"
})

nav_about.addEventListener("click", () => {
    nav_about.style.backgroundColor = "#0d6efd"
    nav_home.style.backgroundColor = "white"
    nav_skill.style.backgroundColor = "white"
    nav_career.style.backgroundColor="white"
    window.location.href = "#sec2"
})
nav_skill.addEventListener("click", () => {
    nav_skill.style.backgroundColor = "#0d6efd"
    nav_home.style.backgroundColor = "white"
    nav_about.style.backgroundColor = "white"
    nav_career.style.backgroundColor="white"
    window.location.href = "#sec3"
})
nav_career.addEventListener("click", () => {
    nav_career.style.backgroundColor="#0d6efd"
    nav_skill.style.backgroundColor = "white"
    nav_home.style.backgroundColor = "white"
    nav_about.style.backgroundColor = "white"
    window.location.href = "#career"
})
    const img_arr = ["one", "two", "three", "four", "five"]
    const slider = document.getElementById("slider")
    var point = 0
setInterval(() => {
    if (point == 5) {
        point = 0
    }
    slider.src = "img/" + img_arr[point] + ".jpg"
    point++;
}, 1000)
