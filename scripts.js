// JavaScript for an Interactive To-Do List

// Get references to the HTML elements
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Event listener for the "Add" button
addButton.addEventListener('click', addTask);

// JavaScript for Fetching Data from an API

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Display data on the web page
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            resultsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Event listener for the "Fetch Data" button
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', function () {
    const resultsContainer = document.getElementById('results');
    // Toggle the visibility of the results container
    if (resultsContainer.style.display === 'none' || resultsContainer.style.display === '') {
        resultsContainer.style.display = 'block';
        fetchData();
    } else {
        resultsContainer.style.display = 'none';
    }
});
