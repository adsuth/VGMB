
class MiscFuncs {
    constructor() {
        this.messages = {};
        this.commands = {"empty": 0};
    }

    getText( message ) {
        this.messages = {
            correct: `
                <p>
                <span class="colorCorrect"> That was correct! </span> <br>
            `,
            timeTaken: `
                <span class="warningText">Time taken: ${quiz.state.timeToAnswer}!</span> <br>
            `,
            timeMessage: `
                <span class="${quiz.state.timeMessage}"> ${quiz.state.timeMessage.toUpperCase()}! </span> <br>
            `,

            wrong: `
                <p>
                <span class="wrongText"> "${textInput.value}" is incorrect! </span>
                </p>
            `,
            songInfo: `
                Track: <span class="boldText answerList" title="answers: ${quiz.song.answers}" > \t${quiz.song.currentSong.title} </span> <br>
                Game: <span class="boldText"> \t${quiz.song.game} </span> <br>
                Series: <span class="boldText"> \t${quiz.song.series} </span> <br>
                </p>
            `,
            skip: `
                <p>
                <span class="boldText warningText bigText"> You skipped that round! </span>
                </p>
            `,
            commandError: `
                <p>
                <span class="warningText">"${quiz.state.failedCommand}" is not a command.</span>
                </p>
            `,
            closeAnswer: `
                <p>
                <span class="warningText">"${textInput.value}" is close!</span>
                </p>
            `,
            
            comboMessages: [
                `<p><span class="ultrasonic"> An insane combo!! </span> <br> `,
                `<p><span class="ultrasonic"> Keep it going!! </span> <br> `,
                `<p><span class="ultrasonic"> MADNESS!! </span> <br> `,
                `<p><span class="ultrasonic"> Well done!! </span> <br> `,
                `<p><span class="ultrasonic"> Alright settle down!! </span> <br> `,
            ],

            timeOut: `
                <p>
                <span class="wrongText boldText"> Time's Up! </span> <br>
                <span class="wrongText">Unlucky!</span> <br>
            `,
            shieldUsed: `
                <p>
                <span class="shieldColor boldText"> Shield raised! </span> <br>
                <span class="shieldColor">You won't lose points or your combo this turn, even if you skip!</span>
                </p>
            `,

        }
        if ( message === "comboMessages" ) {
            return `${this.messages.comboMessages[this.randomInt(this.messages.comboMessages.length)]}
                <span class="comboColor">That's ${quiz.state.currentCombo} in a row!</span></p>`
        }
        let text = this.messages[message];

        return text;
    }

    generateText( text ) {
        // prevents too many messages
        if ( text === "undefined" ) { return }
        if ( textArea.childNodes.length > 50 ) {
            textArea.removeChild( textArea.childNodes[0] );
        }
        let pEl = document.createElement("p");
        pEl.innerHTML += text;
        textArea.appendChild( pEl );
        quiz.OTHERFUNC.scrollToBottom();
    }
    /**
     * ie: "ultrasonic" or "supersonic"
     */
    getTimeMessage() {
        // calc time (TOTAL)
        quiz.state.timeToAnswer = (quiz.state.timeEnd - quiz.state.timeStart) / 1000;
    
        let time = quiz.state.timeToAnswer;
    
        if ( time < 3 ) { this.updateRoundPoints( 2 ); return "ultrasonic"; }
        else if ( time < 5 ) {  this.updateRoundPoints( 1 ); return "supersonic" }
        else { return ""; }
    
    }

    checkForCommand( input ) {
        if ( this.commands.hasOwnProperty("empty") ) {
            this.commands = {
                "/skip": quiz.SH.skipSong,
                "/pass": quiz.SH.skipSong,
                "/next": quiz.SH.skipSong,
            
                "/mute": quiz.SH.muteSong,
                "/unmute": quiz.SH.muteSong
            }
        }        
        
        for (let command in this.commands) {
            if ( input.trim().toLowerCase() === command ) {
                this.commands[command]();
                return
            }
        }
    
        quiz.state.failedCommand = input;
        generateText( this.getText("commandError") );
    }

    updateRoundPoints( amount ) {
        console.log( "adding " + amount)
        quiz.state.roundPoints += amount;
    }

    updateCounter() {
        quiz.state.pointCounterValue += quiz.state.roundPoints * quiz.state.comboMultiplier;
        pointCounter.innerText = quiz.state.pointCounterValue;
    }

    randomInt( max ) {
        return Math.floor( Math.random() * max );
    }

    scrollToBottom() {
        textArea.scrollTop = textArea.scrollHeight;
    }

}