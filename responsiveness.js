window.addEventListener('resize', responsiveDocument)

responsiveDocument()

function responsiveDocument() {
    let size = window.innerWidth
    let head = document.querySelector("head")
    let htmlData
    if (size < 690) {
        htmlData = `<link rel="stylesheet" href="mobile.css">`
    } else {
        htmlData = `<link rel="stylesheet" href="desktop.css">`
    }
    head.insertAdjacentHTML("beforeend", htmlData)
}