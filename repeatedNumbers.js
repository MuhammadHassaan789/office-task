let prompt = require('prompt-sync')();

const paragraph = prompt("Enter a paragraph: ");
const repeatedWords = (function (paragraph) {
    function findRepeatedWords(paragraph) {
        const words = paragraph.toLowerCase().replace(/[^\w\s]/g, '').split(" ");
        const wordCount = {};

        words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });

        const repeatedWords = {};
        Object.entries(wordCount).forEach(([word, count]) => {
            if (count > 1) {
                repeatedWords[word] = count;
            }
        });
        return repeatedWords
    }
    return findRepeatedWords(paragraph);
})(paragraph);

console.log(repeatedWords);