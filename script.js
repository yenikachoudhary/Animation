const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.querySelector(".container");


let ground, grass, snow;
let basket = {
    x: canvas.width / 2,
    y: snow - 50,
    width: 100,
    height: 50
}

function resize(){
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    ground = canvas.height - 80;
    grass = canvas.height - 100;
    snow = canvas.height - 110;

    basket.y = snow - basket.height;
}
resize();
basket.x = canvas.width/2;



window.addEventListener("resize", () => {
    resize();
});



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
    ctx.fillRect(0, snow, canvas.width, grass - snow);
}

function drawBasket() {
    ctx.fillStyle = "brown";

    ctx.fillRect(
        basket.x,
        basket.y,
        basket.width,
        basket.height
    );
}

function snowfall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snowflakes.length; i++) {
        let snowflake = snowflakes[i];
        snowflake.y = snowflake.y + snowflake.speed;

        if (snowflake.y > snow) {
            snowflake.y = 0;
            snowflake.x = Math.random()*canvas.width;
        }
        ctx.beginPath();

        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);

        ctx.fillStyle = "white";
        ctx.fill()
    }
    drawGround();
    drawBasket();
    requestAnimationFrame(snowfall);
}

window.addEventListener("keydown", function (e) {
    if (e.code === "ArrowLeft") {
        basket.x -= 10;
        if (basket.x < -basket.width) {
            basket.x = canvas.width;

        }

    } else if (e.code === "ArrowRight") {
        basket.x += 10;
        if (basket.x > canvas.width) {
            basket.x = -basket.width;
        }

    }
});
snowfall();
