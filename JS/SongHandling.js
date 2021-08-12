
class SongHandler {
    constructor() {
    }

    /**
     * @param startSeconds change for quickFire
     * @param endSeconds   change for quickFire
     */
    changeSong(startSecongs = 0, endSeconds = null) {
        // TODO update so i can just put full yt urls in the json
        let url = `http://www.youtube.com/v/${ this.formatLink(quiz.SG.track.link) }?version=3`;

        player.cueVideoByUrl( {
            mediaContentUrl: url,
            startSeconds: startSecongs,
            endSeconds: endSeconds
        })

    }

    formatLink( link ) {
        return link.slice( link.lastIndexOf("/") + 1 );
    }

    skipSong() {
        if ( quiz.state.isEnding || quiz.state.isSkipping || quiz.state.isAFK ) { return }
        if ( !quiz.state.isShielded ) {
            quiz.resetCombo();
            quiz.OTHERFUNC.updateRoundPoints( -1 );
        }
        quiz.state.isSkipping = true;

        textInput.value = "";
        
        quiz.OTHERFUNC.updateCounter();

        quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText("skip") );
        quiz.OTHERFUNC.generateText( "<p>" + quiz.OTHERFUNC.getText("songInfo") );
    
        quiz.SH.fadeOutSong();
        
        window.setTimeout( () => { quiz.gameMode() }, 2000 );
    }

    fadeOutSong() {
        var fadeInterval = window.setInterval( () => { 
            player.setVolume( player.getVolume() - 1 ); 
        
            if (player.getVolume() === 0) { 
                window.clearInterval(fadeInterval);
            }
        
        }, 10)
    }

    /**
     * mutes/ unmutes the current song
     */
    muteSong() {
        if ( player.isMuted() ) {
            player.unMute();
            muteButton.style.backgroundColor = "var(--colorDark)";
        }
        else { 
            player.mute();
            muteButton.style.backgroundColor = "#ed6b6b";
        }
    }
    

}