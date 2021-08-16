// instantiate variables
const quiz = new VGMB();        // the main object; handles quiz
var player;                     // the youtube player

const titleTheme = document.getElementById("audio_title");

// quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText("welcomeMessage") );

// plays the theme song composed by sutson (pretty based)
window.addEventListener("focus", playTitleTheme );
function playTitleTheme() {
    // note: function is nonymous so the event can be deleted
    titleTheme.volume = 0.3;
    titleTheme.play();
}

function removeTitleThemeElement() {
    window.removeEventListener("focus", playTitleTheme);
    titleTheme.remove();
    delete(titleTheme);
    delete(playTitleTheme);
}


// the afk button starts afk state (replaces mute button)
afkButton.addEventListener("click", quiz.goAFK );



// start button will begin standard game (for now)
startButton.addEventListener("click", () => {
    if (quiz.gameModeName === "standard" ) { return };
    changeColorPalette( "standard" )
    
    // remove title theme (if it exists);
    removeTitleThemeElement();

    quiz.OTHERFUNC.generateText(  `
    <p>
    <span class="boldText biggerText"> Welcome to Standard Mode! </span> <br>
    Random series, games and songs! <br>
    Guess the name of the <span class="boldText">game</span> to win! <br>
    </p>
` );
    quiz.gameModeName = "standard";

    quiz.gameMode = quiz.standardGame;
    quiz.gameMode();

})

relaxButton.addEventListener("click", () => {
    if (quiz.gameModeName === "relax" ) { return };
    changeColorPalette( "relax" );
    
    // remove title theme (if it exists);
    removeTitleThemeElement();

    quiz.OTHERFUNC.generateText(  `
    <p>
    <span class="boldText biggerText"> Welcome to Relaxed Mode! </span> <br>
    Sit back and relax to some neat beats from a variety of game series <br>
    </p>
` );
    quiz.gameModeName = "relax";

    quiz.gameMode = quiz.relaxMode;
    quiz.gameMode();

})

// getting answers
textInput.addEventListener('keypress', (ev) => {
    // dont bother processing for empty inputs
    if (textInput.value.length === 0) { return }

    // dont process inputs for relax mode
    if ( quiz.gameModeName === "relax" ){ return }
    
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
        else if ( quiz.state.isAFK ) { textInput.value = ""; return; }

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
skipButton.addEventListener("click", quiz.SH.skipSong )

// skip button
shieldButton.addEventListener("click", quiz.useShield );

document.addEventListener('keydown', (ev) => {
    if (quiz.state.history.length === 0) { return }

    if (ev.key  === "ArrowUp") {
        ev.preventDefault();
        if ( quiz.state.historyPos < quiz.state.history.length - 1  ) { quiz.state.historyPos++; }
        textInput.value = quiz.state.history[ quiz.state.historyPos ]; 
    }

});

document.addEventListener('keydown', (ev) => {
    if (quiz.state.history.length === 0) { return }

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


function initialiseSeriesList() {
    for (let serie in ALLSONGS.series ) {
        gameModes.appendChild( createButton(serie) )
    }
}

// temporarily blocked until new game modes are devised

// function createButton( text ) {
//     let btn = document.createElement("div");
//     btn.className = "button " + ALLSONGS.series[text].seriesColor;
//     btn.innerHTML = text.toUpperCase();

//     btn.addEventListener("click", (ev) => {
//         if (quiz.gameModeName === text || quiz.state.isEnding || quiz.state.isAFK ) { return };

//         quiz.state.currentSeries = text;

//         document.getElementById("audio_sfx").src = "";
//         // changeColorPalette( quiz.SH.ALLSONGS.series[text].color );

//         quiz.gameModeName = text;
        
//         gameModeMessages.singleSeries = `
//         <p>
//         <span class="biggerText boldText" style="color: var(--color${capital(ALLSONGS.series[text].seriesColor)}); text-transform: capitalize;"> Welcome to ${quiz.gameModeName} Mode! </span> <br>
//         Songs from the <span style="text-transform: capitalize;">${quiz.gameModeName}</span> series! <br>
//         Guess the name of the <span class="boldText">game</span> to win! <br>
//         </p>
//         `
//         quiz.OTHERFUNC.generateText( gameModeMessages[ "singleSeries" ] );
        
//         quiz.resetCombo();
//         quiz.resetShield();

//         quiz.gameMode = () => { quiz.singleSeriesGame(text) };

//         quiz.SH.fadeOutSong();
//             window.setTimeout( () => { 
//                 quiz.gameMode();
//             }, 3000 );

//     })

//     return btn;
// }


// initialiseSeriesList();

