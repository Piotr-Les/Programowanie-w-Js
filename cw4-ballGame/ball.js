class Ball {
	constructor(radius, x, y) {
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.dx = 0;
		this.dy = 0;
	}

	restrictBorders(canvas) {
		if (this.x - this.radius < 0) {
			this.x = this.radius;
		}
		if (this.x + this.radius > canvas.width) {
			this.x = canvas.width - this.radius;
		}
		if (this.y - this.radius < 0) {
			this.y = this.radius;
		}
		if (this.y + this.radius > canvas.height) {
			this.y = canvas.height - this.radius;
		}
	}

	drawPlayerOnCanvas(canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		canvasContext.fillStyle = 'purple';
		canvasContext.fill();
	}

	move() {
		this.x += this.dx;
		this.y += this.dy;
	}
}
