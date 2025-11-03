document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const output = document.getElementById('output');
    const copyButton = document.getElementById('copyButton');

    inputText.addEventListener('input', () => {
        const text = inputText.value;
        const trimmed = text.trim();

        if (trimmed.length >= 3) {
            const reversedText = reverseString(trimmed);
            output.textContent = reversedText;
            copyButton.style.display = 'inline-block';
        } else {
            output.textContent = '';
            copyButton.style.display = 'none';
        }
    });

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(output.textContent).then(() => {
            copyButton.textContent = "Copied!";
            setTimeout(() => {
                copyButton.textContent = "Copy Reversed Text";
            }, 1500);
        }).catch(err => console.error("Clipboard error:", err));
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
