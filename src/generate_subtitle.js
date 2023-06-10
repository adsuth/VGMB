

let potentialSubtitles = [
    "guess doo doos real fast",
    "the totally original concept",
    "The Video Game Music Blitz!",
    "I am still proud of that logo",
    "any bugs are features actually.",
    "By ADSU",
    "Inspired by VGMQuiz",
    ""
]

let subtitleEl = document.getElementById("p_subtitle") 

/**
 * @description randomly generates a subtitle to display below the VGMB title
 */
function generateNewSubtitle() {
    subtitleEl.innerText = potentialSubtitles[Math.floor( Math.random() * potentialSubtitles.length )]
}

generateNewSubtitle()