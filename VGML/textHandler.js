
const textArea = document.getElementById("textArea");

function generateText() {
    let text = `
        <p>
            <span class="boldText">Title:</span> <a href="https://youtu.be/${songData.link}">${songData.title}</a>   <br>
            <span class="boldText">Game:</span> ${songData.game}     <br>
            <span class="boldText">Series:</span> ${songData.series} <br>
        </p>
    `
    textArea.innerHTML += text;
    scrollToBottom();
}

function scrollToBottom() {
    textArea.scrollTop = textArea.scrollHeight;
}