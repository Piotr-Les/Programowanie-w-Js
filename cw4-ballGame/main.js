const canvas = document.getElementById('canv');
let ctx = canvas.getContext('2d');
let animationFrame;
let seconds;
let minutes;

const player = new Ball(15, 20, 20, 'purple');
let holes;
initHoles();
function initHoles() {
	holes = [];
	for (let i = 0; i < 15; i++) {
		let radius = randFromRange(8, 25);
		let x = randFromRange(radius, window.innerWidth - radius);
		let y = randFromRange(radius, window.innerHeight - radius);
		let color = '#FF8066';

		if (i != 0) {
			for (let j = 0; j < holes.length; j++) {
				if (Sphere.getDistance(x, y, holes[j].x, holes[j].y) - radius * 3 < 0) {
					x = randFromRange(radius, window.innerWidth - radius);
					y = randFromRange(radius, window.innerHeight - radius);
					j = -1;
				}
			}
		}
		holes.push(new Hole(radius, x, y, color, i));
	}
}
let start = Date.now();
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
	displayTime();
	animationFrame = requestAnimationFrame(updateCanvas);
	//game over condition
	if (holes.length === 0) {
		gameOver();
		return;
	}

	function displayTime() {
		seconds = Math.floor((Date.now() - start) / 1000);
		minutes = Math.floor(seconds / 60);
		seconds %= 60;
		ctx.font = '20px Arial';
		ctx.fillStyle = 'red';
		ctx.fillText(
			minutes.toString().padStart(2, '0') +
				':' +
				seconds.toString().padStart(2, '0'),
			10,
			25
		);
	}
	function gameOver() {
		displayFinalScore();
		cancelAnimationFrame(animationFrame);
		const restart = document.querySelector('.restart');
		restart.addEventListener('click', () => {
			window.location.reload();
		});
	}

	function displayFinalScore() {
		const final = document.querySelector('.final-box');
		final.classList.add('active');
		insertScore();

		function insertScore() {
			let scoreValue = `
			${minutes.toString().padStart(2, '0')} : 
			${seconds.toString().padStart(2, '0')}`;
			const scoreCont = document.querySelector('.score');

			scoreCont.innerHTML = `Your time is ${scoreValue}`;
		}
	}
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
