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
const userData = [0,nameone.value, surname.value, email.value]
newScoresArray.unshift(userData)
localStorage.setItem("data", JSON.stringify(newScoresArray)); 
console.log(newScoresArray)
console.log("local storage", JSON.parse(localStorage.getItem("data")))
}


buttonNode.addEventListener("click", anotherPage)

//button

function anotherPage(){
  if(!isThisAnEmail(email.value)){
    alert("Please enter a valid email address")
    return;
  }
  
  if (nameone.value === "" && surname.value === "" && email.value === ""){
    Swal.fire({
      title: 'Please insert your name, surname and e-mail address.',
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
        rgba(0,0,123,0.4)
        center
        no-repeat
      ` })
  } else {
     onEnter();
      window.location.href = "questions.html"; 
  }
}
let isThisAnEmail = function (str) {
  let newArr = str.split("");    
  let hasAt = false;
  let hasDomain = false;
  let domainArr = []; 
  let domainStr = "";
  for(let i=0;i<newArr.length;i++){
      if(newArr[i] === "@"){
          hasAt = true;            
          break;
      }else{
          hasAt = false;            
      }
  }
  for(j=newArr.length;j>=0;j--){
      domainArr.unshift(newArr[j]);
      if(newArr[j] === "."){
          if((newArr.length - j)>=2){
              hasDomain = true;
              break;
          }else{break;}
      };
  }
  if(hasDomain && hasAt){
      return true;

  }else{
      return false;
  }
}

 