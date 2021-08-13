
const canvas = document.getElementById("canvas_loadingBar");
const ctx = canvas.getContext("2d");

    /**
     * LoadingBar - note its tied to the canvas above
     * @param interval in ms, the length of the song
     */
class LoadingBar {
    
    constructor( songTime, interval ) {
        this.x = 0;
        this.y = canvas.height;

        // length of song in ms (milliseconds)
        this.songTime = songTime;
        this.interval = interval;
        // how much the canvas is filled by each 10ms
        this.increment = canvas.height / this.songTime * (1 / this.interval)
    }
    
    update() {
        this.y -= this.increment;
    }

    draw() {
        this.fillColorCheck();
        ctx.fillRect( this.x, this.y, canvas.width, canvas.height );
    }

    // check to see if its in supersonic color range assuming US and SS are 2s and 4s
    fillColorCheck() {

        // -3 due to end of round interval. It should be 27 secs not 30 secs
        let second = 1 / (this.songTime - 3)

        if ( this.y > canvas.height - (canvas.height * second * 3) ) {
            ctx.fillStyle = "rgb(218, 116, 213)";
        }
        else if (this.y > canvas.height - (canvas.height * second * 5)  ) {
            ctx.fillStyle = "rgb(116, 218, 116)";
        }
        else {
            ctx.fillStyle = "#666";
        }
    }


    clearCanvas() {
        ctx.fillStyle = "#222";
        ctx.fillRect( 0, 0, canvas.width, canvas.height )
    }

}

