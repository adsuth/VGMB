
const RELAX_FACTS = [
    "Here's a bit of cocktail trivia as you seem to have finished your song."
];

function showRandomFact() {
    let text = getRandomFact();
    quiz.OTHERFUNC.generateText( text );
}

function getRandomFact() {
    return RELAX_FACTS[ Math.floor( Math.random() * RELAX_FACTS.length ) ];
}