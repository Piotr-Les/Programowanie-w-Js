class Snow {
	constructor() {
		this.x = random(10, window.innerWidth - 10);
		this.y = random(-10, -window.innerHeight - 10);

		this.dx = 2;
		this.dy = random(1, 2.5);
		this.radius = random(2, 5);
		this.color = '#fff';
	}
	drawObjectOnCanvas(canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		canvasContext.fillStyle = this.color;
		canvasContext.fill();
	}
	move() {
		this.y += this.dy;
		if (this.y > window.innerHeight) {
			this.y = random(-10, -window.innerHeight - 10);
		}
	}
}
