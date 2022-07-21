
const checkbox = document.querySelector("#checkbox")
checkbox.addEventListener("click", function () {
  checkbox.classList.toggle("selected")
})

function proceedButton () {
  if(checkbox.classList.contains("selected")) { 
     window.location.href = "adminpage.html"; 
  } else {
     Swal.fire({
      title: 'To proceed to another page you need to check the box.',
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
        rgba(0,0,123,0.4)
        center
        no-repeat
      ` })}
}
