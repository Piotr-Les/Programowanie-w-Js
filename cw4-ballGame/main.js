const canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');

const player = new Ball(
	15,
	window.innerWidth / 2,
	window.innerHeight / 2,
	'purple'
);
let holes;
initHoles();
function initHoles() {
	holes = [];
	for (let i = 0; i < 10; i++) {
		let x = Math.random() * innerWidth;
		let y = Math.random() * innerHeight;
		let radius = 20;
		let color = 'red';
		if (i != 0) {
			for (let j = 0; j < holes.length; j++) {
				if (Sphere.getDistance(x, y, holes[j].x, holes[j].y) - radius * 2 < 0) {
					x = Math.random() * innerWidth;
					y = Math.random() * innerHeight;
				}
			}
		}
		holes.push(new Hole(radius, x, y, color));
	}
}

function updateCanvas() {
	clearCanvas();
	//init the PLAYER
	player.drawObjectOnCanvas(ctx);
	player.restrictBorders(canvas, 'red');
	player.move();
	//init the HOLES
	holes.forEach((hole) => {
		hole.drawObjectOnCanvas(ctx);
	});
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

	// console.log('dx : ' + player.dx);
	// console.log('dy : ' + player.dy);
}

function randFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
