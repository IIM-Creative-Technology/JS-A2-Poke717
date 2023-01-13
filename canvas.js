const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const canvas = document.createElement("canvas");

canvas.width = screenWidth;
canvas.height = screenHeight;

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const pokeball = new Image();
pokeball.src = "img/poke.png";

const pokeballs = [];

for (let i = 0; i < 10; i++) {
  pokeballs.push({
    x: Math.random() * screenWidth,
    y: Math.random() * screenHeight,
    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4,
  });
}

function draw() {
  ctx.clearRect(0, 0, screenWidth, screenHeight);

  for (let i = 0; i < pokeballs.length; i++) {
    const p = pokeballs[i];

    ctx.drawImage(pokeball, p.x, p.y);

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > screenWidth) {
      p.vx = -p.vx;
    }
    if (p.y < 0 || p.y > screenHeight) {
      p.vy = -p.vy;
    }
  }

  requestAnimationFrame(draw);
}

pokeball.onload = draw;
