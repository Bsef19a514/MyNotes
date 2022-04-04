window.addEventListener('resize', responsiveDocument)

responsiveDocument()

function responsiveDocument() {
    let size = window.innerWidth
    console.log(size)
    let head = document.querySelector("head")
    let link = document.createElement("link")
    link.rel = "stylesheet"
    if (size < 690) {
        link.href = "mobile.css"
    } else {
        link.href = "style.css"
    }
    head.appendChild(link)
}