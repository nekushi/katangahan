let docWidth = window.innerWidth - 20
let docHeight = window.innerHeight - 20

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

for (let i = 0; i < Math.floor(docWidth / 25); i++) {
    createStar()
}