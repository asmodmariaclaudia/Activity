
// for images
const sect1Right = (image) => {
    let div = document.createElement("div")
    div.className = "image1"
    div.innerHTML = `<img src="./images/${image}">
    
    `

    return div
}

export {sect1Right}