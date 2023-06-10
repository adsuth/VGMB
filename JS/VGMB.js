
class VGMB {
  constructor() {
    this.state = {
      isStarted: false,
      isMuted: false,
      isBroken: false,
      shouldShowFact: false,
      videoPlaying: false,
      videoEnded: false,
      answered: false,
      history: [],
      historyPos: -1,
      
      failedCommand: "",
      showWrongAnswers: true,
      
      timeStart: 0,
      timeEnd: 0,
      timeToAnswer: 0,
      timeMessage: "",
      
      roundPoints: 0,
      pointCounterValue: 0,
      pointMilestone: 100,

      comboMultiplier: 1,
      currentCombo: 0,

      isRiskUnlocked: false,
      riskMessageShown: false,

      isSkipping: false,
      isEnding: false,
      
      loadingInterval: "", 
      isLoading: false,

      isAFK: false,

      currentSeries: ""

    }
    this.relaxTimeout = null
    this.abilityState = {
      shield: {
        isCooldown: false,
        name: "shield",
        cooldown: 0,
        cooldownLength: 4,
        button: shieldButton,
        activeColor: "Blue",

        useMessage: "shieldUsed",
        rechargeMessage: "shieldRecharge",

        function: function () {
          quiz.abilityState.shield.isActive = true
        },
        
        isActive: false
      },
      hint: {
        isCooldown: false,
        name: "hint",
        cooldown: 0,
        cooldownLength: 4,
        button: hintButton,
        activeColor: "Purple",

        useMessage: "hintUsed",
        rechargeMessage: "hintRecharge",

        function: function () {
          quiz.abilityState.hint.currentHint = quiz.generateHint()
          quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText("showHint") )
          quiz.abilityState.hint.isActive = true
        },

        isActive: false,
        currentHint: ""
      },
      risk: {
        isCooldown: false,
        name: "risk",
        cooldown: 0,
        cooldownLength: 4,
        button: riskButton,
        activeColor: "Red",

        useMessage: "riskUsed",
        rechargeMessage: "riskRecharge",

        function: function () {
          quiz.abilityState.risk.isActive = true
        },

        isActive: false,
        isRisking: false
      }
    }

    this.songHistory = []

    this.input = ""
    this.SH = new SongHandler()
    this.OTHERFUNC = new MiscFuncs() 
    this.LOADBAR = ""
    this.SG = new SongGetter()
    this.SFX = new SoundEffectHandler()

    this.currentVolume = 40

    this.song = ""

    this.gameMode = null
    this.gameModeName = ""

  }

  /**
   * Standard ruleset:
   *  random series, games and songs
   */
  standardGame() {
    player.setVolume( this.currentVolume )
    this.resetForNextRound()
    this.SG.getSong()
    this.SH.changeSong()
  }

  relaxMode() {
    player.setVolume( this.currentVolume )
    
    if ( this.state.shouldShowFact )
    {     
      showRandomFact()

      this.relaxTimeout = setTimeout( () => {
        this.SG.getSong()
        this.SH.changeSong()
        this.OTHERFUNC.generateText( this.OTHERFUNC.getText("relaxSongInfo") )
      }, 3000 )
    }
    else
    {
      this.SG.getSong()
      this.SH.changeSong()
      this.OTHERFUNC.generateText( this.OTHERFUNC.getText("relaxSongInfo") )
    }
    
    this.resetForNextRound()
    
  }

  startLoadingBar() {   
    this.state.isLoading = true
    this.state.loadingInterval = setInterval( () => {
      if ( this.state.isLoading ) {
        quiz.LOADBAR.update()
        quiz.LOADBAR.draw()
      }
    }, 1000)
  }
  
  checkAnswer( input ) {

    // if correct
    if ( !this.state.answered && this.SG.game.answers.includes( input.trim().toLowerCase() ) ) {

      // calc time (END)
      this.state.timeEnd = new Date().getTime()
      
      this.SFX.playSFX( this.OTHERFUNC.getTimeMessage() )
      
      this.state.answered = true
      this.state.isEnding = true
      quiz.state.isLoading = false
      
      let text = this.OTHERFUNC.getText("correct")
      
      // increment combo
      this.updateCombo()
      
      // reset shield only if being used
      if ( this.abilityState.shield.isActive ) {
        this.resetAbility("shield")
      }
      
      // get time message
      this.state.timeMessage = this.OTHERFUNC.getTimeMessage()
      
      
      if ( this.state.timeMessage !== "correct" ) { text += this.OTHERFUNC.getText("timeMessage") }
      
      text += this.OTHERFUNC.getText("timeTaken")
      text += this.OTHERFUNC.getText("songInfo")

      this.OTHERFUNC.generateText( text )

      // increment point counter 
      this.OTHERFUNC.updateRoundPoints( 1 )

      this.OTHERFUNC.updateCounter()

      this.gameMode()
      
    }
  
    else {
      if (quiz.state.showWrongAnswers) { this.OTHERFUNC.generateText( this.OTHERFUNC.getText("wrong") ) }
            
      this.state.history.unshift( textInput.value )
      this.state.historyPos = 0
    }
  
  }

  resetCombo() {
    this.state.comboMultiplier = 1
    this.state.currentCombo = 0
    
    comboText.innerText = "x" + this.state.currentCombo

    this.state.isRiskUnlocked = false
  }

  updateCombo() {
    this.state.currentCombo++
    if ( this.state.currentCombo % 10 === 0 && this.state.currentCombo) {
      this.OTHERFUNC.generateText( this.OTHERFUNC.getText("comboMessages") )
      this.state.comboMultiplier++
    }
    comboText.innerText = "x" + this.state.currentCombo

    if ( this.state.currentCombo >= 10 ) {
      
      this.state.isRiskUnlocked = true
    }
  }

  resetForNextRound() {
    // clearTimeout(timeUpTimeOut)
    if ( this.LOADBAR ) { window.clearInterval( this.state.loadingInterval ) }

    // reset the video play state
    this.state.videoEnded = false    
    
    // reset history
    this.state.history = []
    this.state.historyPos = -1

    // reset intermediate states
    this.state.isSkipping = false
    this.state.isEnding = false

    if ( this.gameModeName === "relax" )
      this.state.shouldShowFact = true

    // reset player input
    textInput.value = ""
    
    if ( this.state.isRiskUnlocked ) { 
      riskButton.className = "button"
      if ( !this.state.riskMessageShown ) { 
        this.state.riskMessageShown = true;
        this.OTHERFUNC.generateText( this.OTHERFUNC.getText("riskUnlocked") ) 
      }
    }
    else { 
      this.state.riskMessageShown = false
      this.resetAbility("risk")
      riskButton.className = "disabled" 
    }
    
    // turn isRisking on for next round
    if ( !this.state.isBroken && this.abilityState.risk.isActive ) { this.abilityState.risk.isRisking = true }

    // enable/ disable buttons when needed
    if ( !this.state.isBroken && this.abilityState.risk.isRisking) {
      this.OTHERFUNC.generateText( this.OTHERFUNC.getText("riskStart") )
      shieldButton.className = "disabled"
      hintButton.className = "disabled"
    }
    else {      
      shieldButton.className = "button"
      hintButton.className = "button"
    }

    // recharge abilities (risk, )
    Object.values( this.abilityState ).forEach( ability => {
      ability.isActive = false
      if ( ability.onCooldown ) {
        this.rechargeAbility( ability.name )
      }
    } )

    

    // reset round points
    this.state.roundPoints = 0
    
    // reset answered state
    this.state.answered = false

    this.state.isBroken = false
  }

  
  rechargeAbility( ability ) {
    if ( !this.abilityState[ability].onCooldown && !this.state.answered ) { return }
    quiz.abilityState[ability].button.style.backgroundColor = "var(--colorDarker)"
    quiz.abilityState[ability].cooldown -= 1

    if ( quiz.abilityState[ability].cooldown === 0 ) {
      this.resetAbility(ability)
      this.OTHERFUNC.generateText(this.OTHERFUNC.getText( quiz.abilityState[ability].rechargeMessage ))
    }
  }

  resetAbility( ability ) {
    quiz.abilityState[ability].cooldown = 0
    quiz.abilityState[ability].onCooldown = false
    quiz.abilityState[ability].button.style.backgroundColor = null
  }

  useAbility( ability ) {
    if ( quiz.gameModeName === "relax" ){ return }
    // // if the round is ending, shields on CD, song isnt playing or we're afk, prevent using shield
    if ( quiz.abilityState.risk.isRisking || quiz.state.isEnding || quiz.abilityState[ability].onCooldown || player.getPlayerState() !== 1 || quiz.state.isAFK ) { return }
    
    quiz.abilityState[ability].button.style.backgroundColor = `var(--color${quiz.abilityState[ability].activeColor})`
    quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText( quiz.abilityState[ability].useMessage ) )
    
    quiz.SFX.playAbilitySound( ability )
    
    quiz.abilityState[ability].function()

    if ( ability === "risk" && quiz.abilityState[ability].isActive ) { return }

    quiz.abilityState[ability].onCooldown = true
    quiz.abilityState[ability].cooldown += quiz.abilityState[ability].cooldownLength

  }

  /**
   * generates a "hint" string
   */
  generateHint() {
    let answer = quiz.SG.game.answers[0]
    
    // positions of all the letters
    let hintLetters = new Set()

    let numberOfLetters = 0
    if ( answer.length > 15 ) { numberOfLetters = Math.floor(answer.length / 3) }
    else { numberOfLetters = Math.floor(answer.length / 2 ) }


    while ( hintLetters.size < numberOfLetters ) {
      hintLetters.add( this.OTHERFUNC.randomInt(answer.length) )
    } 
    
    let hint = ""

    for (let i = 0; i < answer.length; i++) {
      let isPunctuation = punctuationMarks.includes( answer[i] )

      if ( isPunctuation || hintLetters.has(i) ) {
        hint += answer[i]
      }
      else {
        hint += "."
      }
    }

    return hint

  }

  /**
   * A method that will enter the AFK state
   * While AFK, game is muted and points wont be deducted for time outs
   *
   */
  goAFK() {
    // cant go afk if game hasnt started or youre risking
    if ( !quiz.gameModeName || quiz.abilityState.risk.isRisking ) { return }

    if ( quiz.state.isAFK ) { afkButton.style.backgroundColor = null }
    else { afkButton.style.backgroundColor = "rgb(237, 107, 107)" }
    
    quiz.SH.muteSong()
    volSlider.disabled = !volSlider.disabled
    quiz.state.isAFK = !quiz.state.isAFK
  }

}