class Snow {
	constructor() {
		this.x = random(10, window.innerWidth - 10);
		this.y = random(-10, -window.innerHeight - 10);
		this.radius = random(1, 5);
		this.dx = Math.sin(random(0, Math.PI * 2));
		this.dy = 0.5;

		this.color = `rgba(255, 255, 255, ${random(0.5, 1)})`;
	}
	drawObjectOnCanvas(canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		canvasContext.fillStyle = this.color;
		canvasContext.fill();
	}
	move() {
		//down
		let acc = this.dy * this.radius;
		this.y += acc;

		//left or right
		this.x += this.dx;

		//recycle offscreen
		if (
			this.y > window.innerHeight ||
			this.x > window.innerWidth + this.radius ||
			this.x < 0 - this.radius
		) {
			this.x = random(10, window.innerWidth - 10);
			this.y = random(-10, -window.innerHeight - 10);
		}
	}
}
