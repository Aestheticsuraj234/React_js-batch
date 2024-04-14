

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const reversedText = inputText.split('').reverse().join('');
    
    if (inputText === reversedText) {
        document.getElementById('result').innerText = `"${inputText}" is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `"${inputText}" is not a palindrome.`;
    }
}
