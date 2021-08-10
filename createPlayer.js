
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
        'onReady': onPlayerReady,
        'onStateChange' : onVideoEnd
      }
    });
  }

function onVideoEnd(event) {
    if (player.getPlayerState() === 0) {
        if ( !quiz.state.isShielded ) {
          quiz.OTHERFUNC.updateRoundPoints( -1 );
          quiz.resetCombo();
        }

        quiz.OTHERFUNC.updateCounter();

        let text = "";
        text += quiz.OTHERFUNC.getText("timeOut");
        text += quiz.OTHERFUNC.getText("songInfo");

        quiz.OTHERFUNC.generateText( text );
        quiz.gameMode();
    }
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    quiz.SH.getSong();
    event.target.playVideo();
}




// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}