let textNode = document.getElementById("inputtext")
let buttonNode = document.querySelector("button")

buttonNode.addEventListener("click", changeColor)


function changeColor(){
    if(textNode.value === ""){
        Swal.fire({
            title: 'Please add some text!',
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)s
              center
              no-repeat
            ` });
    }else if(textNode.value !== ""){
        window.location.href = "https://epicode.com/"; 
        }
    }
    const container = document.querySelector('.rating')
    const items = container.querySelectorAll('.rating-item')
    container.onclick = e => {
        const elClass = e.target.classList;
        if (!elClass.contains('active')) {
            items.forEach (
                item => item.classList.remove('active')
            );
            console.log(e.target.getAttribute("data-rate"));
            elClass.add('active');
        }
    }

