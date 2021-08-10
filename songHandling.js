
class SongHandler {
    constructor() {
        this.ALLSONGS = JSON.parse(songsJSON);
    }

    /**
     * Gets and returns song
     */
    getSong( series = "" ) {

        // unless given, the series is randomly chosen
        if ( !series ) {
            series = this.getRandomProp( this.ALLSONGS.series );
        }
        let game = this.getRandomProp( this.ALLSONGS.series[ series ].game );
        let song = this.getRandomProp( this.ALLSONGS.series[ series ].game[ game ].songs  );

        // return object with link and display title
        return {
            currentSong: this.ALLSONGS.series[ series ].game[ game ].songs[song],
            game: this.ALLSONGS.series[ series ].game[ game ].gameName,
            series: this.ALLSONGS.series[ series ].seriesName,
            answers: this.ALLSONGS.series[ series ].game[ game ].answers,
            closeAnswers: this.ALLSONGS.series[ series ].game[ game ].closeAnswers
        };
    }

    getRandomProp( object ) {
        let items = [];
        for (let item in object) {
            items.push( item );
        }
    
        return items[ quiz.OTHERFUNC.randomInt(items.length) ];
    
    }

    changeSong() {
        player.loadVideoById( quiz.song.currentSong.linkID );
        player.playVideo();
    }

    playSong( song ) {
        if ( player.getVolume() < 100 ) { player.setVolume( 100 ) }
        song = this.getSong();
        this.changeSong( song.currentSong.linkID );
    }

    skipSong() {
        if ( !quiz.state.isShielded ) {
            quiz.resetCombo();
            quiz.OTHERFUNC.updateCounter( -1 );
        }

        textInput.value = "";
        
        
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