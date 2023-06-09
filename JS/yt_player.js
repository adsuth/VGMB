// pilfered directly from youtubes docs
// added a few specific methods for event listeners though

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//  after the API code downloads.

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
      'onStateChange': onStateChange,
      'onError': onError,
    }
  })
}

function onError( ev )
{
  if ( ev?.data === 2 )
    return
  
  console.warn(`PlayerError: ${ev?.data || "N/A"}\n Game: ${quiz.SG.game.gameName}`)
  quiz.SH.skipSong( true )
}

var timeUpTimeOut

// when the video starts playing
function onStateChange(ev) {

  if (ev.data === YT.PlayerState.CUED) {
    quiz.state.timeStart = new Date().getTime()
    player.playVideo()
  }

  if (ev.data === YT.PlayerState.PLAYING) {
    quiz.LOADBAR = new LoadingBar(player.getDuration(), 10)
    quiz.LOADBAR.clearCanvas()
    quiz.startLoadingBar()
  }

  if (ev.data === YT.PlayerState.ENDED) {
    // dont process anything for relax mode
    if (quiz.gameModeName === "relax")
      return quiz.gameMode()

    // for other game modes
    timeUp()
  }

}



// method to handle when clip has ended
function timeUp() {

  // recur gamemode
  if (!quiz.state.isEnding) {
    quiz.state.isEnding = true

    // to prevent being penalised for last second answers
    if (!quiz.state.answered && !quiz.state.isAFK) {
      // reset combo and decrease points if shield isnt active
      if (!quiz.abilityState.shield.isActive) {
        // if risking, remove 2 * combo
        if (quiz.abilityState.risk.isRisking) {
          quiz.state.roundPoints = -quiz.state.roundPoints
        }

        quiz.OTHERFUNC.updateRoundPoints(-1)
        quiz.resetCombo()
      }
      // reset hint only if being used (if the hint didnt help)
      if (quiz.abilityState.hint.isActive) {
        quiz.resetAbility("hint")
      }

      quiz.OTHERFUNC.updateCounter()

      quiz.OTHERFUNC.generateText(
        quiz.OTHERFUNC.getText("timeOut") +
        quiz.OTHERFUNC.getText("songInfo")
      )
    }

    clearTimeout(timeUpTimeOut)
    quiz.gameMode()

  }



}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo()
  // calc time (START)   
  quiz.state.timeStart = new Date().getTime()
}