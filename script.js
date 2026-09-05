const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ground = canvas.height - 80;
let grass = canvas.height - 100;
let snow = canvas.height - 110;

let snowflakes = [];

for (let i = 0; i < 200; i++) {
    let snowflake = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 2 + 1
    };
    snowflakes.push(snowflake);
}

function drawGround() {
    ctx.fillStyle = "#914514";
    ctx.fillRect(0, ground, canvas.width, canvas.height - ground);

    ctx.fillStyle = "#7CFC00"; 
    ctx.fillRect(0, grass, canvas.width, ground - grass); 

    ctx.fillStyle = "white";
    ctx.fillRect(0,snow, canvas.width,grass - snow);
}

function snowfall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
        snowflake.y = snowflake.y + snowflake.speed;

        if (snowflake.y > snow) {
            snowflake.y = 0;
        }
        ctx.beginPath();

        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);

        ctx.fillStyle = "white";
        ctx.fill()
    }
    drawGround();
    requestAnimationFrame(snowfall);
}
snowfall();

