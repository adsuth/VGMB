
const textArea = document.getElementById("textArea");

function generateText() {
    let text = `
        <p>
            <span class="boldText">Title:</span> <a class="boldText" href="https://youtu.be/${songData.link}">${songData.title}</a>   <br>
            <span class="boldText">Game:</span> ${songData.game}     <br>
            <span class="boldText">Series:</span> ${songData.series} <br>
        </p>
    `
    if ( textArea.childNodes.length > 50 ) { textArea.removeChild( textArea.firstElementChild ) }
    textArea.innerHTML += text;
    scrollToBottom();
}

function scrollToBottom() {
    textArea.scrollTop = textArea.scrollHeight;
}
