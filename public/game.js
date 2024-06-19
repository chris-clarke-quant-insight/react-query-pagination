const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Game variables (replace with your own values)
let scrollSpeed = 5;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 10;
let ballSpeedX = 0;
let ballSpeedY = 0;

let platforms = []; // Array to store platform objects

// Function to handle gamepad input
function handleGamepad(gamepad) {
  // Access gamepad axes and buttons for movement control
  ballSpeedX = gamepad.axes[0]; // Left stick X for horizontal movement
  // Add more logic for other buttons or axes
}

// Function to update game state
function update() {
  // Update ball position based on speed and collisions
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check for collisions with walls and platforms
  if (ballX + ballRadius > canvas.width) {
    ballX = canvas.width - ballRadius;
    ballSpeedX *= -1;
  } else if (ballX - ballRadius < 0) {
    ballX = ballRadius;
    ballSpeedX *= -1;
  }

  // Handle platform collisions (logic depends on platform data structure)
  for (let i = 0; i < platforms.length; i++) {
    // Check if ball collides with current platform
    if (/* collision logic based on platform position and size*/) {
      ballSpeedY *= -1; // Bounce off platform
      // Optionally adjust ballSpeedX based on platform movement
    }
  }

  // Update platform positions based on movement logic
  for (let platform of platforms) {
    platform.y += platform.speed; // Update platform Y position
    // Check if platform goes off-screen and handle it (remove, reset)
  }
}

// Function to draw the game scene
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background (replace with scrolling map logic)
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw platforms
  for (let platform of platforms) {
    ctx.fillStyle = "#00f"; // Platform color
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  }

  // Draw ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "#f00";
  ctx.fill();
}

// Game loop
function gameLoop() {
  // Check for connected gamepad
  const gamepad = navigator.getGamepads()[0];
  if (gamepad) {
    handleGamepad(gamepad);
  }

  update();
  draw();

  requestAnimationFrame(gameLoop);
}

// Add event listener for gamepad connection (optional)
window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad Connected!");
});

// Start the game loop
gameLoop();
