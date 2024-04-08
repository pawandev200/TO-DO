function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("todoList");
    var taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    
    var li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
        <div class="circle" onclick="toggleTask(this)"></div>
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>`;
        
    taskList.appendChild(li);
    taskInput.value = "";

    // Update the task count
    updateTaskCount();
}

function editTask(button) {
    var newTaskText = prompt("Edit the task:", button.parentNode.previousElementSibling.textContent);
    if (newTaskText !== null) {
        button.parentNode.previousElementSibling.textContent = newTaskText;
    }
}
function deleteTask(button) {
    var confirmation = confirm("Are you sure you want to delete this task?");
    if (confirmation) {
        button.parentNode.parentNode.remove();
        // Update the task count after deleting a task
        updateTaskCount();
    }
}
function toggleTask(circle) {
    circle.classList.toggle("selected");
    // Check if the circle is selected
    if (circle.classList.contains("selected")) {
        // Add a tick mark inside the circle
        circle.innerHTML = "&#10003;"; // Unicode for check mark
    } else {
        // Remove the tick mark
        circle.innerHTML = "";
    }
    var taskText = circle.nextElementSibling;
    taskText.classList.toggle("crossed-out");
}

function updateTaskCount() {
    var taskCount = document.getElementById("todoList").getElementsByTagName("li").length;
    document.getElementById("taskCount").textContent = taskCount;
}
function deleteAllTasks() {
    var confirmation = confirm("Are you sure you want to delete all tasks?");
    if (confirmation) {
        document.getElementById("todoList").innerHTML = "";
        // Update the task count after deleting all tasks
        updateTaskCount();
    }
}

// probelem is to create a box for each individual element, and whenever we add a new task it shuld be 
// added in a box with hieght and width according to the task. 