
// pilfered directly from youtubes docs
// added a few specific methods for event listeners though

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: "",
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady' : onPlayerReady,
      'onStateChange' : onStateChange,
      'onError' : displayError
    }
  });
}

var timeUpTimeOut;

// when the video starts playing
function onStateChange( ev ) {

  if ( ev.data === YT.PlayerState.CUED ) { 
    if ( player.getVolume() < 100 ) { player.setVolume( 100 ) }
    player.playVideo();
    quiz.startLoadingBar();
    

    // window.setTimeout( () => {
    // }, 3000)
  }

  // for a future afk feature 
  if (ev.data === YT.PlayerState.PAUSED) { clearTimeout(timeUpTimeOut); return }

  if ( ev.data === YT.PlayerState.PLAYING ) {
    quiz.state.timeStart = new Date().getTime();
        
    if ( this.SG ) {
      this.prevSong = this.SG;
    }

    timeUpTimeOut = setTimeout( timeUp, 15000 );
  }
}



// method to handle when clip has ended
function timeUp() {
  
  // recur gamemode
  if ( !quiz.state.isEnding ) {
    quiz.SH.fadeOutSong();
    quiz.state.isEnding = true;

    window.setTimeout( () => {
      
      // to prevent being penalised for last second answers
      if ( !quiz.state.answered ) {
        // reset combo and decrease points if shield isnt active
        if ( !quiz.state.isShielded ) {
          quiz.OTHERFUNC.updateRoundPoints( -1 );
          quiz.resetCombo();
        }
        quiz.OTHERFUNC.updateCounter();

        quiz.OTHERFUNC.generateText( 
          quiz.OTHERFUNC.getText("timeOut") +
          quiz.OTHERFUNC.getText("songInfo")
        );

      }
      
      quiz.gameMode();
    }, 3000 ); 
    
  }

  clearTimeout(timeUpTimeOut);

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    // calc time (START)   
    quiz.state.timeStart = new Date().getTime();
}

function displayError( ev ) {
  if ( ev.data ===  101)
  quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText("playerError") );
}