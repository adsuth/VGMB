
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
    }
  });
}


var timeUpTimeOut;

// when the video starts playing
function onStateChange( ev ) {
  // temp fix for songs that are too short (shorter than 30 seconds)
  if ( ev.data === YT.PlayerState.PLAYING && player.getDuration() < 40 ) { quiz.gameMode() }

  if ( ev.data === YT.PlayerState.CUED ) { 
    console.log( quiz );
    
    quiz.state.timeStart = new Date().getTime();
    
    
    player.playVideo();
    player.setVolume( quiz.currentVolume );


    quiz.startLoadingBar();
    
    
    // window.setTimeout( () => {
    // }, 3000)
  }

  if ( ev.data === YT.PlayerState.PLAYING ) {
   
    if ( this.SG ) {
      this.prevSong = this.SG;
    }

    timeUpTimeOut = setTimeout( timeUp, 27000 );
  }

}



// method to handle when clip has ended
function timeUp() {
  
  // recur gamemode
  if ( !quiz.state.isEnding ) {
    quiz.state.isEnding = true;

    // to prevent being penalised for last second answers
    if ( !quiz.state.answered && !quiz.state.isAFK ) {
      // reset combo and decrease points if shield isnt active
      if ( !quiz.abilityState.shield.isShielded ) {
        quiz.OTHERFUNC.updateRoundPoints( -1 );
        quiz.resetCombo();
      }
      quiz.OTHERFUNC.updateCounter();

      quiz.OTHERFUNC.generateText( 
        quiz.OTHERFUNC.getText("timeOut") +
        quiz.OTHERFUNC.getText("songInfo")
      );

      
    }
    
    clearTimeout(timeUpTimeOut);
    quiz.gameMode();
    
  }

  

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    // calc time (START)   
    quiz.state.timeStart = new Date().getTime();
}