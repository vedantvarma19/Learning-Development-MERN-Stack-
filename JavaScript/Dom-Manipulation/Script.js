// 1️ Selecting elements
const text = document.getElementById("text");
const changeBtn = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

// 2️ Change text on click
changeBtn.addEventListener("click", function () {
    text.textContent = "Text has been changed using JavaScript!";
});

// 3️ Change background color
colorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#f4f4f4";
});

// 4️ Take user input and display greeting
greetBtn.addEventListener("click", function () {
    const name = nameInput.value;
    greeting.textContent = "Hello, " + name + "!";
});

/* In this stage, I learned how JavaScript interacts with HTML elements and responds to user actions.
This makes web pages dynamic and interactive. */ 