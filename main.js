
const quiz = new VGMQuiz();
var player;

const gameModeMessages = {
    standard: `
        <p>
        <span class="gameModeStart"> Welcome to Standard Mode! </span> <br><br>
        Random series, games and songs! <br>
        Guess the name of the <span class="boldText">game</span> to win! <br>
        </p>
    `
}

// start button will begin standard game (for now)
startButton.addEventListener("click", () => {
    if (quiz.state.isStarted) { return };
    quiz.state.isStarted = true;

    quiz.OTHERFUNC.generateText( gameModeMessages[ "standard" ] );


    quiz.gameMode = quiz.standardGame;
    quiz.gameMode();

})
// // start button will begin standard game (for now)
// pokemonButton.addEventListener("click", () => {
//     if (quiz.gameModeName === "pokemon" ) { return };

//     quiz.gameModeName = "pokemon";

//     gameModeMessages.singleSeries = `
//     <p>
//     <span class="gameModeStart"> Welcome to ${capital(quiz.gameModeName)} Mode! </span> <br><br>
//     Songs from the ${capital(quiz.gameModeName)} series! <br>
//     Guess the name of the <span class="boldText">game</span> to win! <br>
//     </p>
//     `
//     quiz.OTHERFUNC.generateText( gameModeMessages[ "singleSeries" ] );

//     quiz.gameMode = () => { quiz.singleSeriesGame("pokemon") };
//     quiz.gameMode();

// })
// // start button will begin standard game (for now)
// zeldaButton.addEventListener("click", () => {
//     if (quiz.gameModeName === "zelda" ) { return };

//     quiz.gameModeName = "zelda";
    
//     gameModeMessages.singleSeries = `
//     <p>
//     <span class="gameModeStart"> Welcome to ${capital(quiz.gameModeName)} Mode! </span> <br><br>
//     Songs from the ${capital(quiz.gameModeName)} series! <br>
//     Guess the name of the <span class="boldText">game</span> to win! <br>
//     </p>
//     `
//     quiz.OTHERFUNC.generateText( gameModeMessages[ "singleSeries" ] );
    


//     quiz.gameMode = () => { quiz.singleSeriesGame("zelda") };
//     quiz.gameMode();

// })

// getting answers
textInput.addEventListener('keypress', (ev) => {
    if (textInput.value.length === 0) { return }
    if (quiz.song.length === 0) { return }

    if (ev.key === 'Enter') {
        if ( textInput.value.charAt(0) === "/" ){ 
            quiz.OTHERFUNC.checkForCommand( textInput.value );

            quiz.state.history.unshift( textInput.value )
            quiz.state.historyPos = 0;

        }

        else { quiz.checkAnswer( textInput.value ) }

        textInput.value = "";
    }

    quiz.OTHERFUNC.scrollToBottom();
    quiz.state.historyPos = -1;

});


enterButton.addEventListener("click", () => {
    if (textInput.value.length === 0) { return }
    if (quiz.song.length === 0) { return }

    quiz.checkAnswer( textInput.value );
    textInput.value = "";
    quiz.OTHERFUNC.scrollToBottom();

    quiz.state.historyPos = -1;
    
})

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
    for (let serie in quiz.SH.ALLSONGS.series ) {
        gameModes.appendChild( createButton(serie) )
    }
}

function createButton( text ) {
    let btn = document.createElement("div");
    btn.className = "button " + quiz.SH.ALLSONGS.series[text].color;
    btn.innerHTML = text.toUpperCase();

    btn.addEventListener("click", (ev) => {
        if (quiz.gameModeName === text ) { return };

        quiz.gameModeName = text;
        
        gameModeMessages.singleSeries = `
        <p>
        <span class="gameModeStart"> Welcome to ${capital(quiz.gameModeName)} Mode! </span> <br><br>
        Songs from the ${capital(quiz.gameModeName)} series! <br>
        Guess the name of the <span class="boldText">game</span> to win! <br>
        </p>
        `
        quiz.OTHERFUNC.generateText( gameModeMessages[ "singleSeries" ] );
        
        quiz.gameMode = () => { quiz.singleSeriesGame(text) };
        quiz.gameMode();
    })

    return btn;
}


initialiseSeriesList();