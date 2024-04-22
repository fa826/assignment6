document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');

    // Create textarea
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter text here...';
    root.appendChild(textarea);

    // Create submit button
    const button = document.createElement('button');
    button.textContent = 'Submit';
    root.appendChild(button);

    // Event listener for button click
    button.addEventListener('click', function() {
        const text = textarea.value.trim(); // Get the entered text and trim whitespace
        const words = text.split(/\s+/); // Tokenize text by whitespace

        // Frequency table object
        const frequency = {};

        // Populate frequency table
        words.forEach(word => {
            const cleanedWord = word.toLowerCase(); // Normalize word to lowercase
            if (cleanedWord !== '') { // Exclude empty strings
                if (frequency[cleanedWord]) {
                    frequency[cleanedWord] += 1;
                } else {
                    frequency[cleanedWord] = 1;
                }
            }
        });

        // Convert frequency object to array and sort by frequency descending
        const sortedFrequency = Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5); // Get top 5 most frequent words

        // Clear previous results
        root.innerHTML = '';

        // Create table to display top 5 words and their frequencies
        const table = document.createElement('table');
        const headerRow = table.createTHead().insertRow();
        headerRow.innerHTML = '<th>Word Name</th><th>Word Frequency</th>';

        // Populate table with data
        sortedFrequency.forEach(([word, count]) => {
            const row = table.insertRow();
            row.innerHTML = `<td>${word}</td><td>${count}</td>`;
        });

        // Append table to root element
        root.appendChild(table);

        // Log frequency table object to console
        console.log(frequency);
    });
});
