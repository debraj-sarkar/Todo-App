let ctr = 1;

function addTodo() {
    // Get the text input from the user
    const inputEl = document.getElementById("input-todo-content");
    const todoText = inputEl.value.trim();

    // Check if the input is empty
    if (todoText === "") {
        alert("Please enter a new task.");
    } else {
        const parentEl = document.querySelector(".tasks-container");

        // Create a new div element for the task item
        const newTaskItem = document.createElement("div");
        newTaskItem.setAttribute("id", "task-item-" + ctr);
        newTaskItem.setAttribute("class", "task-item");

        // Create a new div element for the task content
        const newTaskContent = document.createElement("div");
        newTaskContent.setAttribute("class", "task-content");

        // Create a new checkbox input for marking the task as complete
        const newTaskContentInput = document.createElement("input");
        newTaskContentInput.setAttribute("type", "checkbox");

        // Create a new paragraph element for displaying the task text
        const newTaskContentP = document.createElement("p");
        newTaskContentP.textContent = todoText;

        // Create a new image element for the delete icon
        const newTaskDeleteImg = document.createElement("img");
        newTaskDeleteImg.setAttribute("src", "delete-icon.svg");
        newTaskDeleteImg.setAttribute("alt", "Delete Task");
        newTaskDeleteImg.setAttribute("onclick", "deleteTodo(" + ctr + ")");

        // Append the checkbox and task text to the task content div
        newTaskContent.appendChild(newTaskContentInput);
        newTaskContent.appendChild(newTaskContentP);

        // Append the task content and delete icon to the task item div
        newTaskItem.appendChild(newTaskContent);
        newTaskItem.appendChild(newTaskDeleteImg);

        // Add the new task item to the tasks container
        parentEl.appendChild(newTaskItem);

        // Increment the counter for the next task
        ctr += 1;

        // Clear the input field
        inputEl.value = "";
    }
}

function deleteTodo(index) {
    // Find the task item element by its ID
    const taskItem = document.getElementById("task-item-" + index);

    // Check if the task item exists
    if (taskItem) {
        // Remove the task item from the DOM
        taskItem.parentNode.removeChild(taskItem);
    }
}
