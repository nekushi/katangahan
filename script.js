let docWidth = window.innerWidth - 20
let docHeight = window.innerHeight - 20

// create night sky theme background
function createStar() {
    let starContainer = document.createElement("div")
    let star = document.createElement("div")

    starContainer.classList.add("star-container")
    star.classList.add("star")

    starContainer.style.top = `${Math.floor(Math.random() * docHeight) + 5}px`
    starContainer.style.left = `${Math.floor(Math.random() * docWidth) + 5}px`

    starContainer.appendChild(star)
    document.body.appendChild(starContainer)
}
// loop stars to make more
for (let i = 0; i < Math.floor(docWidth / 25); i++) {
    createStar()
}

const menu = document.querySelector(".hamburger-icon")
const line1 = document.querySelector(".hamburger-icon > .line-1")
const line2 = document.querySelector(".hamburger-icon > .line-2")
const line3 = document.querySelector(".hamburger-icon > .line-3")
const menuList = document.querySelector("nav > ul")
const main = document.querySelector("main")

let isMenuOpen = false
function openMenuLines() {
    line1.style.transform = "rotate(40deg)"
    line2.style.opacity = "0"
    line3.style.transform = "rotate(-40deg)"
    isMenuOpen = true
}
function closeMenuLines() {
    line1.style.transform = "rotate(0)"
    line2.style.opacity = "1"
    line3.style.transform = "rotate(0)"
    isMenuOpen = false
}
function showMenuList() {
    // main.style.marginTop = "-130px"
    menuList.style.display = "flex"
}
function hideMenuList() {
    // main.style.marginTop = "0"
    menuList.style.display = "none"
}

menu.addEventListener("click", () => {
    if (!isMenuOpen) {
        openMenuLines()
        showMenuList()
    } else {
        closeMenuLines()
        hideMenuList()
    }
})