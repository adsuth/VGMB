
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

            isShielded: false,
            isShieldOnCooldown: false,
            shieldCooldown: 0,

            isSkipping: false,
            isEnding: false,
            
            loadingInterval: "", 
            isLoading: false,

            isAFK: false,

        }

        this.songHistory = [];

        this.input = "";
        this.SH = new SongHandler();
        this.OTHERFUNC = new MiscFuncs(); 
        this.LOADBAR = new LoadingBar( 30, 100 );
        this.SG = new SongGetter();
        this.SFX = new SoundEffectHandler();

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

    /**
     * 
     * @param series change for specific series
     */
    singleSeriesGame(series) {
        this.SG.getSong( series );

        this.resetForNextRound();
        this.SH.changeSong();
    }

    startLoadingBar() {     
        this.state.isLoading = true;
        this.state.loadingInterval = setInterval( () => {
            if ( this.state.isLoading ) {
                quiz.LOADBAR.update();
                quiz.LOADBAR.draw();
            }
        }, 10);
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
            
            let text = "";
            text += this.OTHERFUNC.getText("correct");
            
            // increment combo
            this.updateCombo();
            
            
            // get time message
            this.state.timeMessage = this.OTHERFUNC.getTimeMessage();
            
            
            if ( this.state.timeMessage ) { text += this.OTHERFUNC.getText("timeMessage"); }
            
            text += this.OTHERFUNC.getText("timeTaken");
            text += this.OTHERFUNC.getText("songInfo");

            this.OTHERFUNC.generateText( text );
            
            // increment point counter 
            this.OTHERFUNC.updateRoundPoints( 1 );
            this.OTHERFUNC.updateCounter();
            
            this.SH.fadeOutSong();
            window.setTimeout( () => { 
                this.gameMode();
            }, 3000 );
        }
    
        else {
            if ( this.isCloseAnswer( input ) ) {
                this.OTHERFUNC.generateText( this.OTHERFUNC.getText("closeAnswer") );
            }
            else { 
                this.OTHERFUNC.generateText( this.OTHERFUNC.getText("wrong") );
            }
    
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

        // reset the video play state
        this.state.videoEnded = false;

        // clear loading bar
        this.LOADBAR.clearCanvas();
        this.LOADBAR.y = canvas.height;
        clearInterval(this.state.loadingInterval);

        // reset history
        this.state.history = [];
        this.state.historyPos = -1;
        this.state.answered = false;

        // reset intermediate states
        this.state.isSkipping = false;
        this.state.isEnding = false;

        // reset player input
        textInput.value = "";

        // reset shield
        this.state.isShielded = false; 
        if ( this.state.isShieldOnCooldown ) {
            this.rechargeShield();
        }

        // reset round points
        this.state.roundPoints = 0;

        // reset answered state
        this.state.answered = false;
    }

    isCloseAnswer( input ) {
        if ( this.SG.game.closeAnswers.includes( input.trim().toLowerCase() ) ) {
            return true;
        }
    }

    rechargeShield() {
        if ( !this.state.isShieldOnCooldown ) { return }
        shieldButton.style.backgroundColor = "var(--colorDarker)";
        this.state.shieldCooldown -= 1;

        if ( this.state.shieldCooldown === 0 ) {
            this.resetShield();
            this.OTHERFUNC.generateText(this.OTHERFUNC.getText( "shieldRecharge" ));
        }
    }

    useShield() {
        if ( quiz.state.isEnding || quiz.state.isShieldOnCooldown || player.getPlayerState() !== 1 || quiz.state.isAFK ) { return }
        quiz.state.isShielded = true;
        
        shieldButton.style.backgroundColor = "rgb(70, 187, 255)";
        quiz.OTHERFUNC.generateText(quiz.OTHERFUNC.getText( "shieldUsed" ));

        quiz.state.isShieldOnCooldown = true;
        quiz.state.shieldCooldown += 4;
    }

    resetShield() {
        quiz.state.shieldCooldown = 0;
        quiz.state.isShieldOnCooldown = false;
        shieldButton.style.backgroundColor = "var(--colorDark)";
    }

    goAFK() {
        // cant go AFK if track isnt playing
        if (player.getPlayerState() === -1 || player.getPlayerState() === 5 || quiz.state.isSkipping || quiz.state.isEnding ) { return }
        
        quiz.isLoading = false;
        window.clearInterval(quiz.state.loadingInterval);

        if ( quiz.state.isAFK ) {
            quiz.state.isAFK = false;
            afkButton.style.backgroundColor = "var(--colorDark)";

            quiz.gameMode();
        }
        else {
            quiz.state.isAFK = true;
            afkButton.style.backgroundColor = "var(--colorWrong)";
            quiz.OTHERFUNC.updateRoundPoints(-1);
            quiz.OTHERFUNC.updateCounter();
            quiz.resetCombo();

            // wont brick the player if button is spammed
            if ( player.getPlayerState() === 1 ) {
                player.pauseVideo();
            }
        }
    }

}