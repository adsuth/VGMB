const quiz = new VGMB();
var player;

document.getElementById("audio_sfx").addEventListener("focus", document.getElementById("audio_sfx").play())


const gameModeMessages = {
    standard: `
        <p>
        <span class="boldText biggerText"> Welcome to Standard Mode! </span> <br>
        Random series, games and songs! <br>
        Guess the name of the <span class="boldText">game</span> to win! <br>
        </p>
    `
}

afkButton.addEventListener("click", quiz.goAFK );

// start button will begin standard game (for now)
startButton.addEventListener("click", () => {
    if (quiz.gameModeName === "standard" ) { return };
    // changeColorPalette( "default" )

    document.getElementById("audio_sfx").src = "";


    quiz.OTHERFUNC.generateText( gameModeMessages[ "standard" ] );
    quiz.gameModeName = "standard";

    quiz.gameMode = quiz.standardGame;
    quiz.gameMode();

})

// getting answers
textInput.addEventListener('keypress', (ev) => {
    if (textInput.value.length === 0) { return }
    

    if (ev.key === 'Enter') {

    if (!quiz.SG || quiz.state.isEnding) {
            textInput.value = ""; return;
        }
        
        if ( textInput.value.charAt(0) === "/"){ 
            quiz.OTHERFUNC.checkForCommand( textInput.value );

            quiz.state.history.unshift( textInput.value )
            quiz.state.historyPos = 0;

        }

        else if ( quiz.state.isAFK ) { textInput.value = ""; return; }

        else { quiz.checkAnswer( textInput.value ) }

        textInput.value = "";
    }

    quiz.OTHERFUNC.scrollToBottom();
    quiz.state.historyPos = -1;

});



skipButton.addEventListener("click", quiz.SH.skipSong )

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

muteButton.addEventListener("click", quiz.SH.muteSong);


function capital( word ) {
    
    return word.charAt(0).toUpperCase() + word.slice(1);
}


function initialiseSeriesList() {
    for (let serie in ALLSONGS.series ) {
        gameModes.appendChild( createButton(serie) )
    }
}

function createButton( text ) {
    let btn = document.createElement("div");
    btn.className = "button " + ALLSONGS.series[text].seriesColor;
    btn.innerHTML = text.toUpperCase();

    btn.addEventListener("click", (ev) => {
        if (quiz.gameModeName === text || quiz.state.isEnding || quiz.state.isAFK ) { return };

        document.getElementById("audio_sfx").src = "";
        // changeColorPalette( quiz.SH.ALLSONGS.series[text].color );

        quiz.gameModeName = text;
        
        gameModeMessages.singleSeries = `
        <p>
        <span class="biggerText boldText" style="color: var(--color${capital(ALLSONGS.series[text].seriesColor)}); text-transform: capitalize;"> Welcome to ${quiz.gameModeName} Mode! </span> <br>
        Songs from the <span style="text-transform: capitalize;">${quiz.gameModeName}</span> series! <br>
        Guess the name of the <span class="boldText">game</span> to win! <br>
        </p>
        `
        quiz.OTHERFUNC.generateText( gameModeMessages[ "singleSeries" ] );
        
        quiz.resetCombo();
        quiz.resetShield();

        quiz.gameMode = () => { quiz.singleSeriesGame(text) };

        quiz.SH.fadeOutSong();
            window.setTimeout( () => { 
                quiz.gameMode();
            }, 3000 );

    })

    return btn;
}


initialiseSeriesList();

