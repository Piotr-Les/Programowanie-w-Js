const canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');

const player = new Ball(15, 20, 20, 'purple');
let holes;
initHoles();
function initHoles() {
	holes = [];
	for (let i = 0; i < 20; i++) {
		let radius = 20;
		let x = randFromRange(radius, window.innerWidth - radius);
		let y = randFromRange(radius, window.innerHeight - radius);
		let color = '#FF8066';

		if (i != 0) {
			for (let j = 0; j < holes.length; j++) {
				if (
					Sphere.getDistance(x, y, holes[j].x, holes[j].y) - radius * 2.5 <
					0
				) {
					x = randFromRange(radius, window.innerWidth - radius);
					y = randFromRange(radius, window.innerHeight - radius);
					j = -1;
				}
			}
		}
		holes.push(new Hole(radius, x, y, color, i));
	}
}

function updateCanvas() {
	clearCanvas();
	//init the PLAYER
	player.drawObjectOnCanvas(ctx);
	player.restrictBorders(canvas);
	player.move();
	//init the HOLES
	holes.forEach((hole, index) => {
		holes[0].color = 'teal';
		hole.drawObjectOnCanvas(ctx);
		if (
			Sphere.getDistance(player.x, player.y, hole.x, hole.y) -
				player.radius * 2 <
			0
		) {
			if (player.index == hole.number) {
				holes.splice(index, 1);
				player.index++;
			}
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

	player.dx = (x * 8) / 90;
	player.dy = (y * 8) / 90;
}

function randFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
