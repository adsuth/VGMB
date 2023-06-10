const PRE_FACTS = [
  "Here's a bit of cocktail trivia as you seem to have finished your song.",
  "What is better? To have known trivia, or to learn it through VGMB random trivia popups?",
  "The right fact in the wrong popup can make all the difference in the world.",
  "HEY! WOULD YOU LIKE A [limited time only!] PIECE OF [api-ninjas.com]???",
  "I'm here to dispense trivia and play music... and the song just finished",
  "You know, being Caroline taught me a valuable fact... and here it is",
  "Who are you, that do not know this very obscure albeit fun fact?",
  "It's dangerous to go alone, take this fact",
  "Making the mother of all playlists here Jack. Can't fret over every fact",
  "Life is all about learning facts. Outcome is secondary",
  "Thank you, Mario! But the next song is behind this factoid",
  "Grass grows, birds fly, sun shines, and brother, I've got another fact for you",
  "Hey! Listen to this fact",
  "A sword wields no strength unless the hands that holds it knows this next fact.",
  "War. War never changes.\nBut men do, through the roads they walk (and the juicy facts they learn on VGMB's Relax Mode)."
]

async function showRandomFact() {
  let res  = await fetch( "https://api.api-ninjas.com/v1/facts?limit=1", { headers: { "X-Api-Key": "2LjSaqpYhgpHprAMK7qoJQ==43iUniUB3RZEBR2N" } } )
  let data = await res.json()

  let fact = data[0].fact

  let pre  = getRandomPre()

  quiz.SFX.playSFX( "relax" )
  quiz.OTHERFUNC.generateText( `<p style='background-color: "var( --colorRelax )"'> <span class="boldText bigText warningText">${pre}</span><br> <span class="warningText"> ${fact} </span> </p>` )
}

function getRandomPre() {
  return PRE_FACTS[ Math.floor( Math.random() * PRE_FACTS.length ) ]
}