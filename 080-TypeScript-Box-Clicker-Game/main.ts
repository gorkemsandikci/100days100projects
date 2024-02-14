const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

let score = 0;
let fastestClickTime = 9007199254740991;
let gameStartTime = 0;
let gameDuration = 60;

canvas.width = 800;
canvas.height = 600;

const boxSize = 50;
const minInterval = 1000;
const maxInterval = 1000;

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawBox(x: number, y: number): void {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, boxSize, boxSize);
}

function clearCanvas(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateScore(): void {
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function updateTimer(): void {
    const remainingTime = Math.max(gameDuration - (Date.now() - gameStartTime) / 1000, 0);
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText(`Time: ${remainingTime.toFixed(1)}s`, 10, 60);
}

function handleClick(event: MouseEvent): void {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX >= boxX && mouseX <= boxX + boxSize &&
        mouseY >= boxY && mouseY <= boxY + boxSize) {
        const clickTime = Date.now() - gameStartTime;
        fastestClickTime = Math.min(fastestClickTime, clickTime);
        score++;
        boxX = getRandomNumber(0, canvas.width - boxSize);
        boxY = getRandomNumber(0, canvas.height - boxSize);
    }
}

let boxX = getRandomNumber(0, canvas.width - boxSize);
let boxY = getRandomNumber(0, canvas.height - boxSize);

canvas.addEventListener("click", handleClick);

function createBox(): void {
    boxX = getRandomNumber(0, canvas.width - boxSize);
    boxY = getRandomNumber(0, canvas.height - boxSize);
    setTimeout(createBox, getRandomNumber(minInterval, maxInterval));
}

gameStartTime = Date.now();
createBox();

function gameLoop(): void {
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

function endGame(): void {
    clearCanvas();
    ctx.fillStyle = "black";
    ctx.font = "36px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2 - 20);
    ctx.fillText(`Score: ${score}`, canvas.width / 2 - 60, canvas.height / 2 + 20);
    ctx.fillText(`Fastest Click: ${fastestClickTime}ms`, canvas.width / 2 - 140, canvas.height / 2 + 60);
}

gameLoop();
