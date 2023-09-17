// Get the elements
const inputElement = document.querySelector('#input');
const addBtn = document.querySelector('.add');
const taskElements = document.querySelector('#todo-list');
const countElement = document.querySelector('.task-details');
let completedTask = 0;
let inCompletedTask = 0;
let deletedTask = 0;

function updateCounts() {
    const completeTask = document.createElement('h3');
    completeTask.textContent = `Completed Task: ${completedTask}`;

    const incompleteTask = document.createElement('h3');
    incompleteTask.textContent = `Incompleted Task: ${inCompletedTask}`;

    const deleteTask = document.createElement('h3');
    deleteTask.textContent = `Deleted Task: ${deletedTask}`;

    countElement.innerHTML = ''; // Clear the count element
    countElement.appendChild(completeTask);
    countElement.appendChild(incompleteTask);
    countElement.appendChild(deleteTask);
}

function updateList() {
    const inputValue = inputElement.value.trim();

    // Checking if the input is not empty
    if (inputValue !== '') {
        // Creating a new list item
        const listItem = document.createElement('li');
        const spanElement = document.createElement('span');
        const deleteButton = document.createElement('button');
        const icons = document.createElement('div');

        deleteButton.classList.add('delete');
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fas', 'fa-trash');
        const completeIcon = document.createElement('i');
        completeIcon.classList.add('fas', 'fa-check');

        // Setting the text content and structure
        spanElement.textContent = inputValue;
        deleteButton.appendChild(trashIcon);
        listItem.appendChild(spanElement);
        listItem.appendChild(icons);
        icons.appendChild(deleteButton);
        icons.appendChild(completeIcon);

        // Appending the new list item to the existing list
        taskElements.appendChild(listItem);

        // Clearing the input field
        inputElement.value = '';

        // Updating the counts
        inCompletedTask++;
        updateCounts();

        deleteButton.addEventListener('click', function () {
            listItem.remove();
            deletedTask++;
            updateCounts();
        });

        let isCompleted = false;

        completeIcon.addEventListener('click', function () {
            if (!isCompleted) {
                listItem.style.textDecoration = 'line-through';
                completedTask++;
                inCompletedTask--;
                updateCounts();
                isCompleted = true;
            }
        });
    }
}

addBtn.addEventListener('click', updateList);

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        updateList();
    }
});
