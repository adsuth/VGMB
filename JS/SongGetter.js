
/**
 * SongGetter class randomly selects a song from ALLSONGS js object
 */
class SongGetter {
    constructor( series = "", difficulty = 0 ) {
        // contains: seriesName
        this.series = "";
        // contains: answers, closeAnswers, gameName
        this.game = "";
        // contains: linkID, title
        this.track = "";

    }

    /**
     * Gets and returns song
     * @param series the series from which the music will be chosen.
     * @param difficulty the difficulty from which the music will be chosen (0 = normal, 1 = hard )
     */
     getSong( series = "" ) {      
        // unless given, the series is randomly chosen
        if ( series === "" ) {
            series = this.getRandomProp( ALLSONGS.series );
        }

        
        let game = this.getRandomProp( ALLSONGS.series[ series ].game );
        let track = this.getRandomProp( ALLSONGS.series[ series ].game[ game ].songs );
        
        this.setSongData(series, game, track);
    }
    
    setSongData( series, game, track ) {
        this.series = ALLSONGS.series[series];
        this.game = ALLSONGS.series[series].game[game];
        this.track = ALLSONGS.series[series].game[game].songs[track];    
    }
    
    /**
     * @param  object object to get prop from 
     * @returns (String) the randomly selected prop 
     */
    getRandomProp( object ) {
        let items = [];
        for (let item in object) {
            items.push( item );
        }
    
        return items[ Math.floor( Math.random() * items.length ) ];
    
    }    
}
