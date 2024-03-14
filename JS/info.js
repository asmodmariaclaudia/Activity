const sect1left = (title, para, button) => {
    let div = document.createElement("div")
    div.className = "UpLeft"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${para}</p>
                     <button>${button}</button>
    `

    return div
}

export {sect1left}