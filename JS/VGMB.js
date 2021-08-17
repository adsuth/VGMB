
class VGMB {
    constructor() {
        this.state = {
            isStarted: false,
            isMuted: false,
            videoPlaying: false,
            videoEnded: false,
            answered: false,
            history: [],
            historyPos: -1,
            
            failedCommand: "",
            
            timeStart: 0,
            timeEnd: 0,
            timeToAnswer: 0,
            timeMessage: "",
            
            roundPoints: 0,
            pointCounterValue: 0,
            comboMultiplier: 1,
            currentCombo: 0,

            isSkipping: false,
            isEnding: false,
            
            loadingInterval: "", 
            isLoading: false,

            isAFK: false,

            currentSeries: ""

        }

        this.abilityState = {
            shield: {
                isShielded: false,
                isShieldOnCooldown: false,
                shieldCooldown: 0,
            }
        }

        this.songHistory = [];

        this.input = "";
        this.SH = new SongHandler();
        this.OTHERFUNC = new MiscFuncs(); 
        this.LOADBAR = "";
        this.SG = new SongGetter();
        this.SFX = new SoundEffectHandler();

        this.currentVolume = 40;

        this.song = "";

        this.gameMode = null;
        this.gameModeName = "";

    }

    /**
     * Standard ruleset:
     *  random series, games and songs
     */
    standardGame() {
        this.resetForNextRound();
        this.SG.getSong();
        this.SH.changeSong();
    }

    relaxMode() {
        this.resetForNextRound();
        this.SG.getSong();
        this.SH.changeSong();
        this.OTHERFUNC.generateText( this.OTHERFUNC.getText("relaxSongInfo") );
    }

    startLoadingBar() {     
        this.state.isLoading = true;
        this.state.loadingInterval = setInterval( () => {
            if ( this.state.isLoading ) {
                quiz.LOADBAR.update();
                quiz.LOADBAR.draw();
            }
        }, 1000);
    }
    
    checkAnswer( input ) {

        // if correct
        if ( !this.state.answered && this.SG.game.answers.includes( input.trim().toLowerCase() ) ) {

            // calc time (END)
            this.state.timeEnd = new Date().getTime();
            
            this.SFX.playSFX( this.OTHERFUNC.getTimeMessage() )
            
            this.state.answered = true;
            this.state.isEnding = true;
            quiz.state.isLoading = false;
            
            let text = this.OTHERFUNC.getText("correct");
            
            // increment combo
            this.updateCombo();
            
            // reset shield only if being used
            if ( this.abilityState.shield.isShielded ) {
                this.resetShield();
            }
            
            // get time message
            this.state.timeMessage = this.OTHERFUNC.getTimeMessage();
            
            
            if ( this.state.timeMessage ) { text += this.OTHERFUNC.getText("timeMessage"); }
            
            text += this.OTHERFUNC.getText("timeTaken");
            text += this.OTHERFUNC.getText("songInfo");

            this.OTHERFUNC.generateText( text );
            
            // increment point counter 
            this.OTHERFUNC.updateRoundPoints( 1 );
            this.OTHERFUNC.updateCounter();

            this.gameMode();
            
        }
    
        else {
            
            this.OTHERFUNC.generateText( this.OTHERFUNC.getText("wrong") );
            
            this.state.history.unshift( textInput.value )
            this.state.historyPos = 0;
        }
    
    }

    resetCombo() {
        this.state.comboMultiplier = 1;
        this.state.currentCombo = 0;
        
        comboText.innerText = "x" + this.state.currentCombo;
    }

    updateCombo() {
        this.state.currentCombo++;
        if ( this.state.currentCombo % 10 === 0 && this.state.currentCombo) {
            this.OTHERFUNC.generateText( this.OTHERFUNC.getText("comboMessages") );
            this.state.comboMultiplier++;
        }
        comboText.innerText = "x" + this.state.currentCombo;
    }

    resetForNextRound() {
        // clearTimeout(timeUpTimeOut);
        if ( this.LOADBAR ) { window.clearInterval( this.state.loadingInterval ) }

        // reset the video play state
        this.state.videoEnded = false;        
        
        // reset history
        this.state.history = [];
        this.state.historyPos = -1;

        // reset intermediate states
        this.state.isSkipping = false;
        this.state.isEnding = false;

        // reset player input
        textInput.value = "";
        
        
        // reset shield
        this.abilityState.shield.isShielded = false; 
        if ( this.abilityState.shield.isShieldOnCooldown && !this.state.isAFK ) {
            this.rechargeShield();
        }
        
        // reset round points
        this.state.roundPoints = 0;
        
        // reset answered state
        this.state.answered = false;
    }

    rechargeShield() {
        if ( !this.abilityState.shield.isShieldOnCooldown && !this.state.answered ) { return }
        shieldButton.style.backgroundColor = "var(--colorDarker)";
        this.abilityState.shield.shieldCooldown -= 1;

        if ( this.abilityState.shield.shieldCooldown === 0 ) {
            this.resetShield();
            this.OTHERFUNC.generateText(this.OTHERFUNC.getText( "shieldRecharge" ));
        }
    }

    /**
     * A method that will enter "shielded" state.
     * Shield allows player to bypass a song without losing points/combo.
     * shield has a cool down of  
     */
    useShield() {
        // cant shield in relax mode
        if ( quiz.gameModeName === "relax" ){ return }
        // if the round is ending, shields on CD, song isnt playing or we're afk, prevent using shield
        if ( quiz.state.isEnding || quiz.abilityState.shield.isShieldOnCooldown || player.getPlayerState() !== 1 || quiz.state.isAFK ) { return }
        quiz.abilityState.shield.isShielded = true;
        
        shieldButton.style.backgroundColor = "var(--colorBlue)";
        quiz.OTHERFUNC.generateText(quiz.OTHERFUNC.getText( "shieldUsed" ));

        quiz.abilityState.shield.isShieldOnCooldown = true;
        quiz.abilityState.shield.shieldCooldown += 4;
    }

    resetShield() {
        quiz.abilityState.shield.shieldCooldown = 0;
        quiz.abilityState.shield.isShieldOnCooldown = false;
        shieldButton.style.backgroundColor = null;
    }

    /**
     * A method that will enter the AFK state
     * While AFK, game is muted and points wont be deducted for time outs
     *
     */
    goAFK() {
        // cant go afk if game hasnt started
        if ( !quiz.gameModeName ) { return }

        if ( quiz.state.isAFK ) { afkButton.style.backgroundColor = null }
        else { afkButton.style.backgroundColor = "rgb(237, 107, 107)" }
        
        quiz.SH.muteSong();
        volSlider.disabled = !volSlider.disabled;
        quiz.state.isAFK = !quiz.state.isAFK;
    }

}