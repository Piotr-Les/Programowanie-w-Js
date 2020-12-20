class Ball extends Sphere {
	constructor(radius, x, y, color) {
		super(radius, x, y, color);
		this.dx = 0;
		this.dy = 0;
		this.index = 0;
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

	move() {
		this.x += this.dx;
		this.y += this.dy;
	}
}
