// Get reference to the root div
const root = document.getElementById('root');

// Create textarea element
const textarea = document.createElement('textarea');
textarea.placeholder = 'Enter your text here...';
textarea.classList.add('input-text'); // Add a class for styling

// Create submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.classList.add('submit-button'); // Add a class for styling

// Append textarea and submit button to the root div
root.appendChild(textarea);
root.appendChild(submitButton);

