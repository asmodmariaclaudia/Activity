import {sect1Right} from "./img.js"
import {sect1left} from "./info.js"
import {sect2Down} from "./card.js"

const sectOne = {
    title: "Welcome, dear Reader!",
    paraSect1: "Omniscient reader's viewpoint is about Kim Dokja who once read a book. And that book has always been there for him - and it saved his life. He was the only follower of that book that has over 3100 chapters for 10 years. It's always been there for him, even through his ups and downs in life.",
    button: "View More",
    sectImg: "dokja.jpg"
}

const sectTwo = {
    //sect2Title 
    secTwoTitle: "Novel Chapters",
    // box1
    para1: "&#34;If I was really a god, then I was the most incompetent god in the world. The most helpless god in the world who knew everything but couldn&#39;t explain anything.&#34;",
    button1: "Chapter 116",
    sect2img1: "dokja2.jpg",
    // box2
    para2: "&#34;Kim Dokja's salvation was cruel. Like rescuing a drowning person with a blade, those saved by him were inflicted with an unhealable wound.&#34;",
    button2: "Chapter 488",
    sect2img2: "dokja3.jpg",
    //box3
    para3: "&#34;Han Sooyoung wrote the story. Yoo Joonghyuk lived that story. And, I read that very story. And that&#39;s how this world barely managed to reach its completion.&#34;",
    button3: "Chapter 536",
    sect2img3: "dokja4.jpg",
}

//deconstructing sectOne
const {title, paraSect1, button, sectImg} = sectOne

//deconstructing sectTwo
const {secTwoTitle, para1, sect2img1, button1, para2, sect2img2, button2, para3, sect2img3, button3} = sectTwo

// getId
let container1 = document.getElementById("sectionOne")
let container2 = document.getElementById("sectionTwo")

// section1 append
container1.append(sect1Right(sectImg))
container1.append(sect1left(title ,paraSect1, button))

// section2 append
container2.append(sect2Down(secTwoTitle, sect2img1, para1, button1, sect2img2, para2, button2, sect2img3, para3, button3))
