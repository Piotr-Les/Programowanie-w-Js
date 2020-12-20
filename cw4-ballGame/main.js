const canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');

const player = new Ball(20, window.innerWidth / 2, window.innerHeight / 2);
let maxX = canvas.width - player.radius;
let maxY = canvas.height - player.radius;

function updateCanvas() {
	//clear
	clearCanvas();
	player.drawPlayerOnCanvas(ctx);
	player.move();

	// colision detection left & right
	player.restrictBorders(canvas);

	requestAnimationFrame(updateCanvas);
	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
updateCanvas();

window.addEventListener('load', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	updateCanvas();
});

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
	let x = event.gamma;
	let y = event.beta;

	player.dx = (x * 5) / 90;
	player.dy = (y * 5) / 90;

	console.log('dx : ' + player.dx);
	console.log('dy : ' + player.dy);
}
