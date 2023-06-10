
class SoundEffectHandler {
    constructor() {
      this.audioEl       = null
      this.soundsEnabled = true

      this.sounds = {
        "correct":     document.getElementById( "correct_sfx" ),
        "loss":        document.getElementById( "loss_sfx" ),

        "hint":        document.getElementById( "hint_sfx" ),
        "shield":      document.getElementById( "shield_sfx" ),

        "risk_accept": document.getElementById( "riskAccepted_sfx" ),
        "risk_won":    document.getElementById( "riskWon_sfx" ),
        "risk_loss":    document.getElementById( "riskLoss_sfx" ),

        "super":       document.getElementById( "super_sfx" ),
        "ultra":       document.getElementById( "ultra_sfx" ),

        "relax":       document.getElementById( "relax_sfx" ),
      }
    }

    getSound( sound ) {
      if ( sound === "" )
        return null
        
      return this.sounds[ sound ]
    }

    playSFX( sound ) {
      if ( sound.length === 0 || !this.soundsEnabled ) { return }

      // sidestep this for risk sfx
      if ( quiz.abilityState.risk.isRisking )
      {
        if ( sound === "correct" || sound === "super" || sound === "ultra" )
          sound = "risk_won"
        
        if ( sound === "loss" )
          sound = "risk_loss"
      }

      let element = this.getSound( sound )

      if ( !element )
        return console.warn( `Couldn't find sound effect with name '${sound}'` )
      
      if ( element.paused )
        element.play()
      else
        element.currentTime = 0
    }

    toggleSFX()
    {
      if ( quiz.SFX.soundsEnabled )
      {
        quiz.SFX.soundsEnabled = false
        quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText( "sounds_off" ) )
      }
      else
      {
        quiz.SFX.soundsEnabled = true
        quiz.OTHERFUNC.generateText( quiz.OTHERFUNC.getText( "sounds_on" ) )
      }
      
    }
    
    playAbilitySound( ability )
    {
      let name = ""
      switch ( ability )
      {
        case "risk":
          name = "risk_accept"
          break

        default:
          name = ability
          break
      }

      this.playSFX( name )
    }
}