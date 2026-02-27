// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Array to store tasks (application state)
let tasks = [];

// Function to render tasks on screen
function renderTasks() {
    // Clear existing list
    taskList.innerHTML = "";

    // Loop through tasks array
    tasks.forEach((task, index) => {

        // Create <li>
        const li = document.createElement("li");
        li.textContent = task;

        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        // Delete task when button clicked
        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);   // Remove from array
            renderTasks();            // Re-render UI
        });

        // Append button to li
        li.appendChild(deleteBtn);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add task when button clicked
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText); 
        taskInput.value = ""; 
        renderTasks();        
    }
});