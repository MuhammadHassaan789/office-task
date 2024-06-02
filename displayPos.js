const prompt = require('prompt-sync')();
const nlp = require('compromise');

const sentence = prompt("Enter a Sentence: ");

const displayPos = (text) => {
    const doc = nlp(text);
    const terms = doc.json();

    terms.forEach(termObj => {
        termObj.terms.forEach(term => {
            const posTags = term.tags.filter(tag => ['Noun', 'Verb', 'Adjective', 'Adverb', 'Pronoun', 'Preposition', 'Conjunction', 'Determiner', 'Interjection'].includes(tag));
            if (posTags.length > 0) {
                console.log(`Word: ${term.text}, POS: ${posTags.join(', ')}`);
            }
        });
    });
}

displayPos(sentence);
