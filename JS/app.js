import {sect1Right} from "./img.js"
import {sect1left} from "./info.js"
import {sect2Down} from "./card.js"

const sectOne = {
    title: "Welcome to Homepage!",
    paraSect1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci? Quas eveniet dolores nisi nesciunt ea aliquid corporis culpa doloribus a voluptatum!Est excepturi praesentium dignissimos ea atque nemo quos!",
    button: "Contact Me",
    sectImg: "robo1.jpg"
}

const sectTwo = {
    //sect2Title 
    secTwoTitle: "Project Completed",
    // box1
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci? Quas eveniet dolores nisi nesciunt ea aliquid corporis culpa doloribus a voluptatum!Est excepturi praesentium dignissimos ea atque nemo quos!",
    button1: "Project 1",
    sect2img1: "pro1.jpg",
    // box2
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci? Quas eveniet dolores nisi nesciunt ea aliquid corporis culpa doloribus a voluptatum!Est excepturi praesentium dignissimos ea atque nemo quos!",
    button2: "Project 2",
    sect2img2: "pro2.jpg",
    //box3
    para3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci? Quas eveniet dolores nisi nesciunt ea aliquid corporis culpa doloribus a voluptatum!Est excepturi praesentium dignissimos ea atque nemo quos!",
    button3: "Project 3",
    sect2img3: "pro3.png",
}

//deconstructing sectOne
const {title, paraSect1, button, sectImg} = sectOne

//deconstructing sectTwo
const {secTwoTitle, para1, sect2img1, button1, para2, sect2img2, button2, para3, sect2img3, button3} = sectTwo

// getId
let container1 = document.getElementById("sectionOne")
let container2 = document.getElementById("sectionTwo")

// section1 append
container1.append(sect1left(title ,paraSect1, button))
container1.append(sect1Right(sectImg))

// section2 append
container2.append(sect2Down(secTwoTitle, sect2img1, para1, button1, sect2img2, para2, button2, sect2img3, para3, button3))
