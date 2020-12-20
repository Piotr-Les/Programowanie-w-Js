const canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');

const player = new Ball(15, 20, 20, 'purple');
let holes;
initHoles();
function initHoles() {
	holes = [];
	for (let i = 0; i < 10; i++) {
		let radius = 20;
		let x = randFromRange(radius, window.innerWidth - radius);
		let y = randFromRange(radius, window.innerHeight - radius);
		let color = 'teal';

		if (i != 0) {
			for (let j = 0; j < holes.length; j++) {
				if (Sphere.getDistance(x, y, holes[j].x, holes[j].y) - radius * 2 < 0) {
					x = randFromRange(radius, window.innerWidth - radius);
					y = randFromRange(radius, window.innerHeight - radius);
					j = -1;
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
	holes.forEach((hole, index) => {
		hole.drawObjectOnCanvas(ctx);
		if (
			Sphere.getDistance(player.x, player.y, hole.x, hole.y) -
				player.radius * 2 <
			0
		) {
			holes.splice(index, 1);
		}
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
