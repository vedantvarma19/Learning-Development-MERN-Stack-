const body = document.querySelector("body"); 
const button = document.querySelector("#darkBtn");

button.addEventListener("click" , function(){ 
    body.style.backgroundColor = "black"; 
    body.style.color="white";
});

