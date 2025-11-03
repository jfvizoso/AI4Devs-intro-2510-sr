document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseButton = document.getElementById('reverseButton');
    const output = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');

    reverseButton.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (!text) {
            output.textContent = "Please enter some text to reverse.";
            copyButton.style.display = "none";
            return;
        }

        const reversedText = reverseString(text);
        output.textContent = reversedText;
        copyButton.style.display = "inline-block";
    });

    copyButton.addEventListener('click', () => {
        const reversedText = output.textContent;
        copyToClipboard(reversedText);
        copyButton.textContent = "Copied!";
        setTimeout(() => {
            copyButton.textContent = "Copy Reversed Text";
        }, 1500);
    });
});

/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Copies text to the clipboard.
 * @param {string} text - The text to copy.
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
