

let potentialSubtitles = [
    "guess doo doos real fast",
    "the totally original concept",
    "the video game music blitz",
    "<<something quippy here>>",
    "i cant code very well",
    "dont zoom in",
    "dont ask for anything ever again",
    "when you see it",
    "dont be mad little boy",
    "idiots are a idiots",
    "old world mythologies are pretty based",
    "from the creator of those two videos you haven't seen",
    "idk why im wasting my time typing these out",
    "i love london",
    "dinner, pingas even",
    "click that button on the left to randomise your colors. Its based (ignore this is if hasnt been implemented)",
    "i cant wait for these to go out of date",
    "the swsh video is coming fuck you"
];

let subtitleEl = document.getElementById("p_subtitle"); 

/**
 * @description randomly generates a subtitle to display below the VGMB title
 */
function generateNewSubtitle() {
    subtitleEl.innerText = potentialSubtitles[Math.floor( Math.random() * potentialSubtitles.length )];
}

generateNewSubtitle();