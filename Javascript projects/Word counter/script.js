// Get references to the textarea, button, and word count display
const textInput = document.getElementById('text-input');
const countButton = document.getElementById('count-button');
const wordCountDisplay = document.getElementById('word-count');

// Function to count words
function countWords() {
    // Get the text from the textarea
    const text = textInput.value.trim();

    // Split the text into words based on spaces and filter out empty strings
    const words = text.split(/\s+/).filter(word => word.length > 0);

    // Update the word count display
    wordCountDisplay.textContent = words.length;
}

// Add event listener to the button
countButton.addEventListener('click', countWords);
