window.open ("./welcome.html","_self");

const checkbox = document.querySelector("#checkbox")
checkbox.addEventListener("click", function () {
  checkbox.classList.toggle("selected")
})

function proceedButton () {
  if(checkbox.classList.contains("selected")) { 
     window.location.href = "questions.html"; 
  } else {
     alert("To proceed to another page you need to check the box."); 
     }
}
