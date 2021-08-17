
let backButton = document.getElementById("btn_goBackToGame");

backButton.addEventListener("click", () => {
    console.log("changing pages")
    window.location.href = "index.html";
})