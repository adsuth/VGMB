
class SoundEffectHandler {
    constructor() {
      this.audioEl = null
    }

    getSound( sound ) {
      if ( sound === "" )
        return null
        
      return document.getElementById( sound + "_sfx" )
    }

    playSFX( sound ) {
      if ( sound.length === 0 ) { return }
      let element = this.getSound( sound )
      
      if ( element === null )
        return
        
      element.play()
    }
    
}