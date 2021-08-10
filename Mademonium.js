
class VGMQuiz {
    constructor() {
        this.state = {
            isStarted: false,
            isMuted: false,
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
            shieldCooldown: 0
            

        }
        this.input = "";
        this.song = "";
        this.SH = new SongHandler();
        this.OTHERFUNC = new MiscFuncs(); 

        this.gameMode = "";
        this.gameModeName = "";
    }

    /**
     * Standard ruleset:
     *  random series, games and songs
     */
    standardGame() {
        
        this.song = this.SH.getSong(  );
        this.resetForNextRound();
        this.SH.playSong( this.song );
    }

    singleSeriesGame(series) {
        this.song = this.SH.getSong( series );
        this.resetForNextRound();
        this.SH.playSong( this.song );
    }
    
    checkAnswer( input ) {
        console.log( this.song.answers )
        // if correct
        if ( !this.state.answered && this.song.answers.includes( input.trim().toLowerCase() ) ) {
            this.state.answered = true;

            let text = "";
            text += this.OTHERFUNC.getText("correct");

            // increment combo
            this.updateCombo();
            
            // calc time (END)
            this.state.timeEnd = new Date().getTime();
            
            // get time message
            this.state.timeMessage = this.OTHERFUNC.getTimeMessage();
            
            
            if ( this.state.timeMessage ) { text += this.OTHERFUNC.getText("timeMessage"); }
            
            text += this.OTHERFUNC.getText("timeTaken");
            text += this.OTHERFUNC.getText("songInfo");

            this.OTHERFUNC.generateText( text );
            
            // increment point counter 
            this.OTHERFUNC.updateRoundPoints( 1 );
            this.OTHERFUNC.updateCounter();
            pointCounter.innerHTML = this.state.pointCounterValue;
            
            this.SH.fadeOutSong();
            window.setTimeout( () => { this.gameMode() }, 2000 );
        }
    
        else {
            if ( this.isCloseAnswer( input ) ) {
                this.OTHERFUNC.generateText( dthis.OTHERFUNC.getText("closeAnswer") );
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

        // reset history
        this.state.history = [];
        this.state.historyPos = -1;
        this.state.answered = false;

        // reset player input
        textInput.value = "";

        // reset shield
        this.state.useShield = false; 
        if ( this.state.isShieldOnCooldown ) {
            this.rechargeShield();
        }

        // reset round points
        this.state.roundPoints = 0;

        // reset answered state
        this.state.answered = false;

        // calc time (START)   
        this.state.timeStart = new Date().getTime();
    }

    isCloseAnswer( input ) {
        if ( this.song.closeAnswers.includes( input.trim().toLowerCase() ) ) {
            return true;
        }
    }

    rechargeShield() {
        if ( !this.state.isShieldOnCooldown ) { return }
        shieldButton.style.backgroundColor = "#222";
        this.state.shieldCooldown -= 1;

        if ( this.state.shieldCooldown === 0 ) {
            shieldButton.style.backgroundColor = "#333";
            this.OTHERFUNC.generateText(this.OTHERFUNC.getText( "shieldRecharge" ));
        }
    }

    useShield() {
        if ( quiz.state.isShieldOnCooldown || !quiz.song) { return }
        quiz.state.isShielded = true;
        

        shieldButton.style.backgroundColor = "rgb(70, 187, 255)";
        quiz.OTHERFUNC.generateText(quiz.OTHERFUNC.getText( "shieldUsed" ));

        quiz.state.isShieldOnCooldown = true;
        quiz.state.shieldCooldown += 4;
    }

}