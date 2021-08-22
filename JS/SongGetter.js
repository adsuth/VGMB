
/**
 * SongGetter class randomly selects a song from ALLSONGS js object
 */
class SongGetter {
    constructor( difficulty = 0 ) {
        // contains: seriesName
        this.series = "";
        // contains: answers, gameName
        this.game = "";
        // contains: linkID, title
        this.track = "";

    }

    /**
     * Gets and returns song
     * @param difficulty the difficulty from which the music will be chosen (0 = normal, 1 = hard )
     */
     getSong() {              
        let series = this.getRandomProp( ALLSONGS.series );    
        let game = this.getRandomProp( ALLSONGS.series[ series ].game );
        let track = this.getRandomProp( ALLSONGS.series[ series ].game[ game ].songs );

        this.setSongData(series, game, track);

        // prevents common dupes
        if ( quiz.songHistory.includes( track ) ) {
            this.getSong()
        }
        else {
            if ( quiz.songHistory.length > 30 ) { quiz.songHistory.pop() }
            quiz.songHistory.unshift( track )
            this.setSongData(series, game, track);
        }
        
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
    
        return items[ quiz.OTHERFUNC.randomInt( items.length ) ];
    
    }    
}
