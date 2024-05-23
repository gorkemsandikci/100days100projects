const socket = io();
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let drawing = false;

canvas.addEventListener('mousedown', () => { drawing = true; });
canvas.addEventListener('mouseup', () => { drawing = false; context.beginPath(); });
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;

    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = '#000';

    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);

    socket.emit('drawing', {
        x: event.clientX - canvas.offsetLeft,
        y: event.clientY - canvas.offsetTop
    });
}

socket.on('drawing', (data) => {
    context.lineTo(data.x, data.y);
    context.stroke();
    context.beginPath();
    context.moveTo(data.x, data.y);
});