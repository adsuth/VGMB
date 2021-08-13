
class SoundEffectHandler {
    constructor() {
        this.sounds = {
            supersonic: "superSonic",
            ultrasonic: "ultraSonic"
        }
        this.dir = "SFX\\";
        this.format = ".mp3";
        this.audioEl = document.getElementById("audio_sfx");
    }

    getSound( sound ) {
        return this.dir + this.sounds[sound] + this.format;
    }

    setSound( sound ) {
        this.audioEl.src = sound;
    }

    playSound() {
        this.audioEl.play();
    }

    playSFX( sound ) {
        let effect = this.getSound( sound );
        this.setSound( effect );
        this.playSound();
    }
    
}