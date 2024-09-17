const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Create the span element (delete button)
        let span = document.createElement("span");
        span.textContent = "\u00d7"; // Unicode for '×'
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = ''; // Clear input box
        saveTask(); // Save task to local storage
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle checked class
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task
        saveTask();
    }
});

function saveTask() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || '';
}

loadTasks(); // Load tasks when the page loads
