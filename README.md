# assignment6
Creating text processing functions and use DOM API methods to create a web page and interact with the user. 

**Link to the Deployed page**
**https://fa826.github.io/assignment6/**

Used word processing logic to ensure that each word is normalized to lowercase and empty words are excluded from the frequency count.

After populating the frequency object with word counts, converted it into an array of entries (Object.entries(frequency)) and sort it in descending order based on word frequencies (b[1] - a[1]).

Then limited the sorted list to the top 10 most frequent words using .slice(0, 10).

The root container is cleared (root.innerHTML = '') before creating and appending the new table, ensuring a clean display of the results on each button click.

The resulting HTML table displays the top 10 words along with their frequencies in two columns (Word Name and Word Frequency).

This script meets the specified requirements by processing the inserted text, generating a frequency table, and rendering the top 5 most frequent words in an HTML table with the expected format. 
