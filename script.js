const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const img = document.querySelectorAll(".img");
const bold = document.querySelectorAll(".boldText");
const boldArray = new Array(bold.length);



// for (let i = 0; i < bold.length; i++){
//     bold[i].addEventListener("click", (event)=>{
        
//     })
// }









// q1.addEventListener("click", ()=>{
//     a1.style.display = "block";
//     q1.addEventListener("click", ()=>{
//         a1.style.display = "none";
//     });
// });
// a1.addEventListener("click", ()=>{
//     a1.style.display = "none";
// });










// function openClose(place) {
//     if (questionArray[place] == 1) {
//         answer[place].classList.add("answer");
//         img[place].classList.remove(img);
//         bold[place].classList.remove(bold);
//         questionArray[place] = 0;
//     } else {
//         answer[place].classList.remove("answer");
//         img[place].classList.add(img);
//         bold[place].classList.add(bold);
//         questionArray[place] = 1;
//     }
// }
// for (let i = 0; i < question.length; i++) {
//     questionArray[i] = 0;
//     question[i].addEventListener("click", () => {
//         openClose(i);
//     });
// };