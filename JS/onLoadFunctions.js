/**
 * Stores information relevant for creating the game mode buttons.
 * name, message and function
 */
const GAMEMODES = {
    standard: {
        name: "standard",
        message: `
            Random series, games and songs! <br>
            Guess the name of the <span class="boldText">game</span> to win! <br>
        `,
        function: quiz.standardGame,
    },
    relax: {
        name: "relax",
        message: `
            Sit back and relax! <br>
            No points, no combos, just neat beats.
        `,
        function: quiz.relaxMode
    }
}

function initialiseSeriesList() {
    for (let mode in GAMEMODES ) {
        gameModes.appendChild( createButton(GAMEMODES[mode]) );
    }
}

// temporarily blocked until new game modes are devised

function createButton( mode ) {
    let btn = document.createElement("div");
    btn.innerHTML = mode.name.toUpperCase();
    btn.className = "button";

    btn.addEventListener("click", ev => {
        if (quiz.gameModeName === mode.name || quiz.state.isEnding || quiz.state.isAFK || quiz.abilityState.risk.isRisking || quiz.abilityState.risk.isActive ) { return };

        changeColorPalette(mode.name);

        document.getElementById("audio_sfx").src = "";
        // changeColorPalette( quiz.SH.ALLSONGS.series[text].color );

        quiz.gameModeName = mode.name;
        
        // remove title theme (if it exists);
        removeTitleThemeElement();

        quiz.OTHERFUNC.generateText(`
        <p>
        <span class="boldText biggerText"> Welcome to ${capital(mode.name)} Mode! </span> <br>
        ${ mode.message }
        </p>
        `);
        
        quiz.gameMode = mode.function;
        quiz.gameMode();

        })

        return btn;
}

initialiseSeriesList();
