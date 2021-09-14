
class Button {
    constructor(series) {
        this.series = series;
    }

    createButton() {
        let btn = document.createElement("div");
        btn.className = "button";
        btn.innerText = this.series;

        btn.addEventListener( "click", () => { 
            currentSeries = this.series;
            updateSeries(this.series);
        } );

        return btn;
    }
}
