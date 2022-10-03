// instantiate variables
const quiz = new VGMB();        // the main object; handles quiz

var player;

// for hint generation
const punctuationMarks = [",", " ", ".", ":", ";", "?", "!", "-", "_", "(", ")", "[", "]"];
 

const titleTheme = document.getElementById("audio_title");

// plays the theme song composed by sutson (pretty based)
document.addEventListener( "click", playTitleTheme );

function playTitleTheme() {
    // note: function is nonymous so the event can be deleted
    titleTheme.volume = 0.3;
    titleTheme.play();
}

// removes the title theme element after selecting a gamemode
function removeTitleThemeElement() {
    document.removeEventListener( "click", playTitleTheme ) 
    titleTheme.remove();
    delete(titleTheme);
    delete(playTitleTheme);
}

// the afk button starts afk state (replaces mute button)
afkButton.addEventListener("click", quiz.goAFK );


// getting answers
textInput.addEventListener('keypress', (ev) => {
    // dont bother processing for empty inputs
    if (textInput.value.length === 0) { return }
    
    if (ev.key === 'Enter') {
    
    if (quiz.state.isEnding) {
            textInput.value = ""; return;
        }
        
        if ( textInput.value.charAt(0) === "/"){ 
            quiz.OTHERFUNC.checkForCommand( textInput.value );

            quiz.state.history.unshift( textInput.value )
            quiz.state.historyPos = 0;

        }

        // afk check here so players can use commands
        else if ( quiz.state.isAFK || quiz.gameModeName === "relax" ) { textInput.value = ""; return; }

        else { quiz.checkAnswer( textInput.value ) }

        textInput.value = "";
    }

    quiz.OTHERFUNC.scrollToBottom();
    quiz.state.historyPos = -1;

});

// volume slider
volSlider.addEventListener("input", (ev) => {
    if ( player.isMuted() ) {
        quiz.SH.muteSong();
    }
    quiz.currentVolume = ev.target.value;

    player.setVolume( quiz.currentVolume );
})

// skip button
var skipButtons = [];
for(i = 0; i < document.getElementsByClassName("skipButton").length; i++) {
    skipButtons.push( document.getElementsByClassName("skipButton")[i] );
    console.log("added button " + i);
}

skipButtons.forEach( btn => { btn.addEventListener("click", quiz.SH.skipSong ) })


// shield button
shieldButton.addEventListener("click", () => { quiz.useAbility("shield") } );

riskButton.addEventListener("click", () => {  
    if ( quiz.state.isRiskUnlocked ) { quiz.useAbility("risk") }
} );

// hint button
hintButton.addEventListener("click", () => { quiz.useAbility("hint") } );

// image logo (currently just mutes the title theme)
imgLogo.addEventListener("click", () => { 
    titleTheme.volume === 0 ? titleTheme.volume = 0.3 : titleTheme.volume = 0;
    window.removeEventListener("focus", playTitleTheme);
} );

document.addEventListener('keydown', (ev) => {
    if (quiz.state.history.length === 0) { return }

    if (ev.key  === "ArrowUp") {
        ev.preventDefault();
        if ( quiz.state.historyPos < quiz.state.history.length - 1  ) { quiz.state.historyPos++; }
        textInput.value = quiz.state.history[ quiz.state.historyPos ]; 
    }

    if (ev.key  === "ArrowDown") {
        ev.preventDefault();
        quiz.state.historyPos--;
    
        if ( quiz.state.historyPos >= 0  ) { 
            textInput.value = quiz.state.history[ quiz.state.historyPos ]; 
        }
    
        else {
            textInput.value = ""; 
            quiz.state.historyPos = 0;
        }
    }
});

/**
 * @param word the word to be capitalised
 * @returns a capitalised string eg: "dog" => "Dog"
 */
function capital( word ) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

