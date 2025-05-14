// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function createTask(taskContent) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskContent;

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => {
        taskList.removeChild(taskItem);
    };

    // Toggle completed state on click
    taskItem.onclick = () => {
        taskItem.classList.toggle('completed');
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

// Add task when button is clicked
addTaskBtn.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (taskContent !== "") {
        createTask(taskContent);
        taskInput.value = ""; // Clear the input field after adding task
    }
});

// Optional: Allow hitting "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
