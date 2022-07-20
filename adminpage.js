let buttonNode = document.querySelector("button")
let textNode = document.getElementById("inputText")
const correct = sessionStorage.getItem("score");

let newScoresArray = [];
if(localStorage.getItem("data")){
  console.log("true")
  newScoresArray = JSON.parse(localStorage.getItem("data"));
} else {
  console.log("false")
  localStorage.setItem("data", JSON.stringify(newScoresArray)); 
}
console.log(newScoresArray)

const nameone = document.getElementById("inputTextOne")
const surname = document.getElementById("inputTextTwo")
const email = document.getElementById("inputTextThree")

function onEnter() {
const userData = [nameone.value, surname.value, email.value]
newScoresArray.push(userData)
localStorage.setItem("data", JSON.stringify(newScoresArray)); 
console.log(newScoresArray)
console.log("local storage", JSON.parse(localStorage.getItem("data")))
}


buttonNode.addEventListener("click", anotherPage)

//button

function anotherPage(){
  if (nameone.value === "" && surname.value === "" && email.value === ""){
      swal({ title: "Hello!",
             text: "You forgot to put your name, surname and e-mail address.",});
  } else {
     onEnter();
      window.location.href = "questions.html"; 
  }
}

 