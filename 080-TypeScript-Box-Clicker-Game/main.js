var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var score = 0;
var fastestClickTime = 9007199254740991;
var gameStartTime = 0;
var gameDuration = 60;
canvas.width = 800;
canvas.height = 600;
var boxSize = 50;
var minInterval = 1000;
var maxInterval = 1000;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function drawBox(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, boxSize, boxSize);
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function updateScore() {
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText("Score: ".concat(score), 10, 30);
}
function updateTimer() {
    var remainingTime = Math.max(gameDuration - (Date.now() - gameStartTime) / 1000, 0);
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText("Time: ".concat(remainingTime.toFixed(1), "s"), 10, 60);
}
function handleClick(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;
    if (mouseX >= boxX && mouseX <= boxX + boxSize &&
        mouseY >= boxY && mouseY <= boxY + boxSize) {
        var clickTime = Date.now() - gameStartTime;
        fastestClickTime = Math.min(fastestClickTime, clickTime);
        score++;
        boxX = getRandomNumber(0, canvas.width - boxSize);
        boxY = getRandomNumber(0, canvas.height - boxSize);
    }
}
var boxX = getRandomNumber(0, canvas.width - boxSize);
var boxY = getRandomNumber(0, canvas.height - boxSize);
canvas.addEventListener("click", handleClick);
function createBox() {
    boxX = getRandomNumber(0, canvas.width - boxSize);
    boxY = getRandomNumber(0, canvas.height - boxSize);
    setTimeout(createBox, getRandomNumber(minInterval, maxInterval));
}
gameStartTime = Date.now();
createBox();
function gameLoop() {
    clearCanvas();
    drawBox(boxX, boxY);
    updateScore();
    updateTimer();
    if (gameDuration - (Date.now() - gameStartTime) / 1000 <= 0) {
        endGame();
        return;
    }
    requestAnimationFrame(gameLoop);
}
function endGame() {
    clearCanvas();
    ctx.fillStyle = "black";
    ctx.font = "36px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2 - 20);
    ctx.fillText("Score: ".concat(score), canvas.width / 2 - 60, canvas.height / 2 + 20);
    ctx.fillText("Fastest Click: ".concat(fastestClickTime, "ms"), canvas.width / 2 - 140, canvas.height / 2 + 60);
}
gameLoop();
