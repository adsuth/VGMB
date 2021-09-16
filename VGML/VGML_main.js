
const buttonContainer = document.getElementById("buttonContainer");
const randomSeries = document.getElementById("btn_randomSeries");
const searchBar = document.getElementById("inp_seriesSearch");
const volSlider = document.getElementById("inp_volSlider");

const nextButton = document.getElementById("btn_next");
const lastButton = document.getElementById("btn_last");

// searchBar.addEventListener("input", updateButtons );
searchBar.addEventListener("input", updateButtons );
randomSeries.addEventListener("click", () => { 
    currentSeries = "random";
    updateSeries("random") 
} );

nextButton.addEventListener("click", nextSong);
lastButton.addEventListener("click", lastSong);

volSlider.addEventListener("input", (ev) => {
    player.setVolume( ev.target.value );
})

// state
var songData = new SongData;
var songHistory = [];

var currentSeries = "";


async function initButtons() {
    let response = await fetch( "songs.json" );
    let songs = await response.json();

    for (let serie in songs.series) {
        buttonContainer.appendChild( new Button(serie).createButton() );
    } 
} 

async function updateButtons() {
    // await song JSON 
    let response = await fetch( "songs.json" );
    let songs = await response.json();

    // remove all buttons
    buttonContainer.innerHTML = "";

    // add buttons that contain search term
    for (let serie in songs.series) {
        if ( containsSearchTerm( serie ) ) {
            buttonContainer.appendChild( new Button(serie).createButton() );
        }
    } 
}

async function updateSeries( serie = "random" ) {
    let response = await fetch( "songs.json" );
    let songs = await response.json();

    initSeries(songs, serie);
    initSong(songs);



    playSong(); 

}

async function nextSong() {
    if ( !currentSeries ) { return }

    let response = await fetch( "songs.json" );
    let songs = await response.json();

    if ( currentSeries === "random" ) { updateSeries() }
    else {
        initSong(songs);
        playSong();
    }
}

function lastSong() {
    if ( songHistory.length < 2 ) { return }
    console.log( songHistory )
    songHistory.pop();

    songData = new SongData(
        songHistory[ songHistory.length - 1 ].title, 
        songHistory[ songHistory.length - 1 ].link, 
        songHistory[ songHistory.length - 1 ].series, 
        songHistory[ songHistory.length - 1 ].game, 
        songHistory[ songHistory.length - 1 ].song
    ); 

    playSong();
    songHistory.pop();


}

function containsSearchTerm(serie) {
    let hasTerm = serie.toLowerCase().replace( / /g, "" ).includes( searchBar.value.toLowerCase().trim().replace( / /g, "" ) );
    return hasTerm;
}

function initSeries( songs, serie ) {
    if ( serie === "random" ) { 
        songData.series = getRandomProp( songs.series );
    }
    else {
        songData.series = serie;
    }   
    
}

function initSong(songs) {
    
    // series -> (name of series) -> game -> (name of game) -> song -> id -> title, link
    
    songData.game = getRandomProp( songs.series[songData.series].game );
    songData.song = getRandomProp( songs.series[songData.series].game[songData.game].songs );
    
    songData.title = songs.series[songData.series].game[songData.game].songs[songData.song].title;
    songData.link = formatVideoId( songs.series[songData.series].game[songData.game].songs[songData.song].link);
    
}


function getRandomProp( object ) {
    let items = [];
    for (let item in object) {
        items.push( item );
    }

    return items[ getRandomInt( items.length ) ];
}

function getRandomInt( max ) {
    return Math.floor( Math.random() * max );
}

function playSong() {
    updateSongHistory();
    generateText();
    player.cueVideoById(songData.link);
}

function formatVideoId( id ) {
    return id.slice( id.lastIndexOf("/") + 1 );
}

function updateSongHistory() {
    if ( songHistory.length > 100 ) { songHistory.shift() }

    songHistory.push( 
        new SongData( songData.title, songData.link, songData.series, songData.game, songData.song )
    )

}

// entry
initButtons();