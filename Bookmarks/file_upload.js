// Get the HTML elements
const fileInput = document.getElementById('merge-file');
const output = document.getElementById('output');

// Add an event listener for when a file is selected
fileInput.addEventListener('change', (event) => {
    // Get the selected file
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    // Create a new FileReader instance
    const reader = new FileReader();

    // Define what happens when the file is successfully read
    reader.onload = (e) => {
        const fileContent = e.target.result;
        output.textContent = fileContent;
    };

    // Define what happens if the reading fails
    reader.onerror = (e) => {
        console.error('Error reading file:', e.target.error);
        output.textContent = 'Error reading file.';
    };

    // Start reading the file as text
    reader.readAsText(file);
});
