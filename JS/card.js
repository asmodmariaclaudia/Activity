const sect2Down = (twoTitle, image1, para1, button1, image2, para2, button2,image3, para3, button3) => {
    let div = document.createElement("div")
    div.className = "down"
    div.innerHTML = `
                    <h1>${twoTitle}</h1>
                    <ul class="ul">
                        <li><img src="./images/${image1}" class="img1"></li>
                        <li>${para1}</li>
                        <li><button class="btn1">${button1}</button></li>
                    </ul>

                    <ul class="ul2">
                        <li><img src="./images/${image2}" class="img1"></li>
                        <li>${para2}</li>
                        <li><button class="btn1">${button2}</button></li>
                    </ul>

                    <ul class="ul3">
                        <li><img src="./images/${image3}" class="img1"></li>
                        <li>${para3}</li>
                        <li><button class="btn1">${button3}</button></li>
                    </ul>

                    <br><br>
                     
    `
    return div
}

export {sect2Down}