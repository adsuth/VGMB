

let potentialSubtitles = [
    "guess doo doos real fast",
    "the totally original concept",
    "The Video Game Music Blitz!",
    "<<something quippy here>>",
    "i cant code very well",
    "No, I don't know why the change BG button does that either",
    "dont ask for anything ever again",
    "when you see it",
    "dont be mad little boy",
    "idiots are a idiots",
    "old world mythologies are pretty based",
    "from the creator of those three videos you haven't seen",
    "idk why im wasting my time typing these out",
    "i love london",
    "dinner, pingas even",
    "Different game modes have different color themes",
    "i cant wait for these to go out of date",
    "the swsh video is out. Yay.",
    "I am still proud of that logo",
    "skeuomorphism is kinda based, but not really",
    "Subscribe to Mandom on Youtube",
    "xqcL",
    "L_ L_ L_ L_ L_",
    "ELUNDIS CORE",
    "IM PISSING ON THE FUCKING MOOOOOOOOOOOOON",
    "The dialogue you get from Risks is actually Grifton Goyles talking",
    "Grifton Goyles is a lovely man.",
    "Grifton meaning Grifting and Goyles being a corruption of Snake Oil Salesman",
    "777777777777777",
    "I <3 Pyra",
    "I </3 Mythra",
    "BAY-ZED",
    "Physics.",
    "I refuse to fix the BG scaling for images.",
    "any bugs are features actually."
];

let subtitleEl = document.getElementById("p_subtitle"); 

/**
 * @description randomly generates a subtitle to display below the VGMB title
 */
function generateNewSubtitle() {
    subtitleEl.innerText = potentialSubtitles[Math.floor( Math.random() * potentialSubtitles.length )];
}

generateNewSubtitle();