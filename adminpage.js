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

function onEnter() {  
const userData = [0,nameone.value, surname.value]
newScoresArray.unshift(userData)
localStorage.setItem("data", JSON.stringify(newScoresArray)); 
console.log(newScoresArray)
console.log("local storage", JSON.parse(localStorage.getItem("data")))
}

//button

buttonNode.addEventListener("click", anotherPage)

function anotherPage(){

  if (nameone.value === "" && surname.value === ""){
    Swal.fire({
      title: 'Please insert your name and surname.',
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
        rgba(0,0,123,0.4)s
        center
        no-repeat
      ` })
  } else {
     onEnter();
      window.location.href = "questions.html"; 
  }
}

 
