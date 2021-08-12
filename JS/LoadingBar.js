
const canvas = document.getElementById("canvas_loadingBar");
const ctx = canvas.getContext("2d");

    /**
     * LoadingBar - note its tied to the canvas above
     * @param interval in ms, the length of the song
     */
class LoadingBar {
    
    constructor( songTime ) {
        this.x = 0;
        this.y = canvas.height;

        // length of song in ms (milliseconds)
        this.songTime = songTime;
        // how much the canvas is filled by each 10ms
        this.increment = Math.round((this.songTime / 1000 ) / canvas.height * 100) / 100;
    }
    
    update() {
        this.y -= this.increment;
    }

    draw() {
        this.fillColorCheck();
        ctx.fillRect( this.x, this.y, canvas.width, canvas.height );
    }

    // check to see if its in supersonic color range assuming US and SS are 3s and 5s
    fillColorCheck() {

        // -3000 due to end of round interval. It should be 15 secs not 18 secs
        let second = 1 / ( (this.songTime - 3000) / 1000);

        if ( this.y > canvas.height - (canvas.height * second * 2) ) {
            ctx.fillStyle = "rgb(218, 116, 213)";
        }
        else if (this.y > canvas.height - (canvas.height * second * 4)  ) {
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

