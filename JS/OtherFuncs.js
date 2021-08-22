
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
                <span class="warningText">Time taken: ${quiz.state.timeToAnswer} seconds!</span> <br>
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
                Track: <a href="${quiz.SG.track.link}" target="_blank" ><span class="boldText answerList"> \t${quiz.SG.track.title}</a> </span> <br>
                Game: <span class="boldText"> \t${quiz.SG.game.gameName} </span> <br>
                Series: <span class="boldText"> \t${quiz.SG.series.seriesName} </span> <br><br>
                Answers: <span class="boldText"> \t${quiz.OTHERFUNC.generateAnswers()} </span>
                </p>
            `,

            relaxSongInfo: `
                <p onclick="quiz.OTHERFUNC.showText(ev)">
                Track: <a href="${quiz.SG.track.link}" target="_blank" ><span class="boldText answerList"> \t${quiz.SG.track.title}</a> </span> <br>
                Game: <span class="boldText"> \t${quiz.SG.game.gameName} </span> <br>
                Series: <span class="boldText"> \t${quiz.SG.series.seriesName} </span>
                </p>
            `,

            skip: `
                <p>
                <span class="boldText warningText"> You skipped that round! </span>
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
                <span class="wrongText">That's too bad, better luck next time!</span> <br>
            `,
            shieldUsed: `
                <p>
                <span class="shieldColor boldText"> Shield raised! </span> <br>
                <span class="shieldColor">You won't lose points or your combo this turn, even if you skip!</span>
                </p>
            `,
            shieldRecharge: `
                <p>
                <span class="shieldColor boldText"> Your shield is ready to go! </span>
                </p>
            `,
            playerError: `
                <p>
                <span class="wrongText boldText"> Something went wrong! </span> <br>
                <span class="wrongText"> Please refresh the page. </span>
                </p>
            `,
            hintUsed: `
                <p>
                <span class="boldText" style="color: var(--colorPurple)"> Hint Used! </span>
                </p>
            `,
            showHint: `
                <p>
                <span style="color: var(--colorPurple)"> your hint is... </span> <br>
                <span class="monospaceText bigText" style="color: var(--colorPurple)"> ${quiz.abilityState.hint.currentHint} </span>
                </p>
            `,
            hintRecharge: `
                <p>
                <span class="boldText" style="color: var(--colorPurple)"> We're ready to give you a hint! </span>
                </p>
            `,
            pointMessages: [
                `<p><span class="pointMessage" > Nice streak! </span> <br> `,
                `<p><span class="pointMessage"> That's some dedication you got there! </span> <br> `,
                `<p><span class="pointMessage"> Awesome job!! </span> <br> `,
                `<p><span class="pointMessage"> Poggers Champion! </span> <br> `,
                `<p><span class="pointMessage"> That's a lotta points, baby! </span> <br> `,
            ],
        }
        if ( message === "comboMessages" ) {
            return `${this.messages.comboMessages[this.randomInt(this.messages.comboMessages.length)]}
                <span class="comboColor">That's ${quiz.state.currentCombo} in a row!</span></p>`
        }
        if ( message === "pointMessage" ) {
            return `${this.messages.pointMessages[this.randomInt(this.messages.pointMessages.length)]}
            <span style="color:var(--colorYellow)" > You've now passed ${quiz.state.pointMilestone} points! </span>
            </p>
            `
        }
        let text = this.messages[message];

        return text;
    }

    showText( ev ) {
        ev.target.color = "var(--colorLight)";
    }

    generateAnswers() {

        let answers = "";
        let sentinel = 5;
        if ( quiz.SG.game.answers.length < sentinel ) {
            sentinel = quiz.SG.game.answers.length;
        }

        for ( let i = 0; i < sentinel; i++ ) {
            if ( quiz.SG.game.answers[i].length === 0 ) { i--; continue; }
            answers += quiz.SG.game.answers[i];
            if ( i < sentinel - 1 ) { answers += ", " }
        }

        if (quiz.SG.game.answers.length > sentinel) {
            answers += "...";
        }

        return answers;
        
        
    }

    clearTextArea() {
        textArea.innerHTML = "";
    }

    generateText( text ) {
        if ( text === "undefined" ) { return }
        
        // prevents too many messages
        if ( textArea.childNodes.length > 50 ) {
            textArea.removeChild( textArea.childNodes[0] );
        }

        // let pEl = document.createElement("div");
        // pEl.innerHTML += text;
        // textArea.appendChild( pEl );
        textArea.innerHTML += text;
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
                "/unmute": quiz.SH.muteSong,

                "/shield": () => { quiz.useAbility("shield") },
                "/def": () => { quiz.useAbility("shield") },

                "/hint": () => { quiz.useAbility("hint") },

                "/afk" : quiz.goAFK,
                "/away" : quiz.goAFK,
                "/back" : quiz.goAFK,

                "/clear" : this.clearTextArea,

                "/help" : this.goToHelp
            }
        }        
        
        for (let command in this.commands) {
            if ( input.trim().toLowerCase() === command ) {
                this.commands[command]();
                return
            }
        }
    
        quiz.state.failedCommand = input;
        this.generateText( this.getText("commandError") );
    }

    updateRoundPoints( amount ) {
        quiz.state.roundPoints += amount;
    }

    updateCounter() {
        quiz.state.pointCounterValue += quiz.state.roundPoints * quiz.state.comboMultiplier;
        pointCounter.innerText = quiz.state.pointCounterValue;
        if ( quiz.state.pointCounterValue > quiz.state.pointMilestone ) {
            this.generateText( this.getText("pointMessage") );
            quiz.state.pointMilestone += 100;
        }
    }

    randomInt( max ) {
        return Math.floor( Math.random() * max );
    }

    scrollToBottom() {
        textArea.scrollTop = textArea.scrollHeight;
    }

    goToHelp() {
        window.location.href = "help.html";
    }

}