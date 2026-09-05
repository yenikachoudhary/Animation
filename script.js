const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

for (let i = 0; i < 100; i++) {
    let snowflake = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 2 + 1
    };
    snowflakes.push(snowflake);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
        snowflake.y = snowflake.y + snowflake.speed;

    if (snowflake.y > canvas.height) {
        snowflake.y = 0;
    }
    ctx.beginPath();

        ctx.arc(snowflake.x,snowflake.y,snowflake.radius,0,Math.PI * 2);

        ctx.fillStyle = "white";
        ctx.fill()
    }
    requestAnimationFrame(animate);
}

animate();