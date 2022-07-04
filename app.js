// Games rule

/*
1. Create the Canvas and draw on it
2. Move the ball
3. Bounce off the walls
4. Paddle and keyboard controls
5. Games over
6. Build the brick field
7. Collision detection
8. Track the score and win
9. Mouse controls
10. Finishing up

*/

// HTML canvas
const canvas = document.createElement("canvas");

//   cnavas height and widht
canvas.height = innerHeight;
canvas.width = innerWidth;

// cnavas append
document.body.appendChild(canvas);

// canvas animation
const c = canvas.getContext("2d");

// drow ball

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

function drawBall() {
  c.beginPath();
  c.arc(x, y, 10, 0, Math.PI * 2);
  c.fillStyle = "rgb(255, 0, 0, 0.4)";
  c.fill();
  c.closePath();
}

let ballRadius = 1;

function draw() {
  // create a ball
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
