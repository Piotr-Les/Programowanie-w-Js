const canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');
window.addEventListener('load', resizeCanvas);
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	update();
}
const circle = {
	radius: 20,
	x: canvas.width / 2,
	y: canvas.height / 2,
	dx: 0,
	dy: 0,
};
var maxX = canvas.width - circle.radius;
var maxY = canvas.height - circle.radius;
function drawCircle() {
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
	ctx.fillStyle = 'purple';
	ctx.fill();
}
function update() {
	//clear
	clearCanvas();
	drawCircle();
	requestAnimationFrame(update);
	circle.x += circle.dx;
	circle.y += circle.dy;

	// colision detection left & right
	if (circle.x - circle.radius < 0) {
		circle.x = circle.radius;
	}
	if (circle.x + circle.radius > canvas.width) {
		circle.x = canvas.width - circle.radius;
	}
	if (circle.y - circle.radius < 0) {
		circle.y = circle.radius;
	}
	if (circle.y + circle.radius > canvas.height) {
		circle.y = canvas.height - circle.radius;
	}

	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
update();
window.addEventListener('deviceorientation', handleOrientation);
function handleOrientation(event) {
	let x = event.gamma;
	let y = event.beta;

	circle.dx = (x * 10) / 90;
	console.log('dx : ' + circle.dx);
	circle.dy = (y * 10) / 90;
	console.log('dy : ' + circle.dy);
}
