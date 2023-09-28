const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const img = document.querySelectorAll(".img");
const bold = document.querySelectorAll(".boldText");
const boldArray = new Array(bold.length);
const imgArray = new Array(img.length);
const answerArray = new Array(answer.length);


let before;
let boldFont;
let rotateImg;

for (let i = 0; i < bold.length; i++) {
    bold[i].addEventListener("click", () => {
        if (before) {
            before.style.display = "none";
            boldFont.style.fontWeight = "400";
            rotateImg.style.transform = "rotate(180deg)";
            question.style.display.justifyContent = "space between";
        }
        bold[i].parentElement.nextElementSibling.style.display = "block";
        before = bold[i].parentElement.nextElementSibling;
        bold[i].style.fontWeight = "900";
        boldFont = bold[i];
        img[i].style.transform = "rotate(180deg)";
        question.style.justifyContent = "space between";
        rotateImg = img[i];
        img[i].style;
    })
}

function rotate(){
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("click", (event) => {
            img[i].style.transform = "rotate(180deg)";
            img[i].style.left = img[i].offsetLeft + "px";
            img[i].style.top = img[i].offsetTop + "px";
        }
    )}
}