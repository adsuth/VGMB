
const canvas = document.getElementById("canvas_loadingBar");
const ctx = canvas.getContext("2d");

    /**
     * LoadingBar - note its tied to the canvas above
     * @param songTime in SECONDS, the length of the song
     * @param interval in MILLISECONDS, the rate at which the bar is updated
     */
class LoadingBar {
    
    constructor( songTime, interval ) {
        this.x = 0;
        this.y = canvas.height;

        // length of song in ms (milliseconds)
        this.songTime = songTime;
        this.interval = interval;
        // how much the canvas is filled by each 10ms
        this.increment = canvas.height / this.songTime
        this.palette = PALETTES[quiz.gameModeName];
    }

    /**
     * Updates the y value of the rectangle that fills
     * the loading bar canvas.
     * 
     */
    
    update() {
        this.y -= this.increment;
    }

    /**
     * draws a filled rectangle on the canvas.
     * Height is determined by instance's y value.
     */
    draw() {
        this.fillColorCheck();
        ctx.fillRect( this.x, this.y, canvas.width, canvas.height );
    }

    /**
     * Checks to see what color to fill the canvas with.
     * Be it SUPERSONIC, ULTRASONIC or neither
     */
    fillColorCheck() {
        /*
            Ultrasonic === 3 seconds
            Supersonic === 5 seconds
        */

        // calculate a fraction of the song
        let second = 1 / this.songTime

        if ( this.y > canvas.height - (canvas.height * second * 3) ) {
            ctx.fillStyle = this.palette["softUltra"] || "rgb(218, 116, 213)";
        }
        else if (this.y > canvas.height - (canvas.height * second * 5)  ) {
            ctx.fillStyle = this.palette["softSuper"] || "rgb(116, 218, 116)";
        }
        else {
            ctx.fillStyle = this.palette["midLight"] || "#666";
        }
    }

    /**
     * Clears the canvas for the next round
     */
    clearCanvas() {
        ctx.fillStyle = this.palette["darker"] || "#222";
        ctx.fillRect( 0, 0, canvas.width, canvas.height );
    }

}

