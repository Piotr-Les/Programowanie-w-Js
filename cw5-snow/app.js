let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let snowArray = [];
initSnow();
function initSnow() {
	for (let i = 0; i < 200; i++) {
		snowArray.push(new Snow());
	}
}

function updateCanvas() {
	clearCanvas();

	for (const falke of snowArray) {
		falke.drawObjectOnCanvas(ctx);
		falke.move();
	}

	animationFrame = requestAnimationFrame(updateCanvas);

	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
}
updateCanvas();

function random(min, max) {
	return min + Math.random() * (max - min + 1);
}

function clientResize(ev) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.addEventListener('load', clientResize);
