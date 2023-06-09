/**
 * Stores information relevant for creating the game mode buttons.
 * name, message and function
 */
const GAMEMODES = {
  standard: {
    name: "standard",
    color: "colorMid",
    message: `
      Random series, games and songs! <br>
      Guess the name of the <span class="boldText">game</span> to win! <br>
    `,
    function: quiz.standardGame,
  },
  relax: {
    name: "relax",
    color: "colorRelax",
    message: `
      Sit back and relax! <br>
      No points, no combos, just neat beats.
    `,
    function: quiz.relaxMode
  }
}

document.getElementById( "relax_sfx" ).volume = 0.5

function initialiseSeriesList() {
  for (let mode in GAMEMODES ) {
    gameModes.appendChild( createButton(GAMEMODES[mode]) )
  }
}

// temporarily blocked until new game modes are devised

function createButton( mode ) {
  let btn = document.createElement("button")
  btn.innerHTML = mode.name.toUpperCase()
  btn.className = "button"
  btn.setAttribute( "data-mode", mode.name )

  btn.addEventListener("click", ev => {
    clearTimeout( quiz.relaxTimeout )
    quiz.state.shouldShowFact = false

    if (quiz.gameModeName === mode.name || quiz.state.isEnding || quiz.state.isAFK || quiz.abilityState.risk.isRisking || quiz.abilityState.risk.isActive )
      return

    // unset other buttons after clicking
    for ( let gameModeButton of document.querySelectorAll( "#gameModeArea>.button" ) )
      gameModeButton.style.backgroundColor = "unset"

    quiz.gameModeName = mode.name
    ev.target.style.backgroundColor = `var(--${GAMEMODES[ mode.name ].color})`
    // update the favicon and logo
    document.getElementById( "img_logo" ).src      = `./public/img/logo_${ mode.name }.png`
    document.getElementById( "site_favicon" ).href = `./public/img/logo_${ mode.name }.png`


    quiz.OTHERFUNC.generateText(`
    <p>
    <span class="boldText biggerText"> Welcome to ${capital(mode.name)} Mode! </span> <br>
    ${ mode.message }
    </p>
    `)
    
    quiz.gameMode = mode.function
    quiz.gameMode()

    })

    return btn
}

initialiseSeriesList()
