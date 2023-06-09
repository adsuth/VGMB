
class SongHandler {
    constructor() {
    }

    /**
     * @param startSeconds change for quickFire
     * @param endSeconds   change for quickFire
     */
    changeSong(startSecongs = 0, endSeconds = null) {
        // TODO update so i can just put full yt urls in the json
        let url = `http://www.youtube.com/v/${ this.formatLink(quiz.SG.track.link) }?version=3`

        player.cueVideoByUrl( {
            mediaContentUrl: url,
            startSeconds: startSecongs,
            endSeconds: endSeconds
        })

    }

    formatLink( link ) {
        return link.slice( link.lastIndexOf("/") + 1 )
    }

    skipSong( isBroken = false ) {
      if ( isBroken ) {
        quiz.state.isBroken = true
        quiz.state.shouldShowFact = false

        // need to remove the most recent popup for relax mode
        if ( quiz.gameModeName === "relax" )
          textArea.removeChild( textArea.lastElementChild )

        return quiz.gameMode()
      }
      if ( quiz.state.isEnding || quiz.state.isSkipping || quiz.state.isAFK || !quiz.gameMode) { return }
      
      // just skip the song, dont process for relax mode
      if ( quiz.gameModeName === "relax" )
      {
        quiz.state.shouldShowFact = false
        return quiz.gameMode()
      }
      
      quiz.state.isSkipping = true
        if ( !quiz.abilityState.shield.isActive ) {
            quiz.resetCombo()
            // make round points negative

            quiz.OTHERFUNC.updateRoundPoints( -1 )
        }
        
        // reset hint only if being used
        if ( quiz.abilityState.hint.isActive ) {
            quiz.resetAbility("hint")
        }
        
        quiz.OTHERFUNC.updateCounter()

        quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText("skip") )
        quiz.OTHERFUNC.generateText( "<p>" + quiz.OTHERFUNC.getText("songInfo") )

        quiz.gameMode()
    }

    fadeOutSong() {
        var fadeInterval = window.setInterval( () => { 
            player.setVolume( player.getVolume() - 1 ) 
        
            if (player.getVolume() === 0) { 
                window.clearInterval(fadeInterval)
            }
        
        }, 100)
    }

    /**
     * mutes/ unmutes the current song
     */
    muteSong() {
        if ( player.isMuted() ) { player.unMute() }
        else { player.mute() }
    }
    

}