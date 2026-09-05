const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let x= 400;
let y = 50;
let radius = 5;
let speed = 2;


function drawSnowflake() {

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y + speed;

    if (y > canvas.height) {
        y = 0;
    }
    drawSnowflake();

    requestAnimationFrame(animate);
}

animate();