class Sphere {
	constructor(radius, x, y, color) {
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.color = color;
	}

	drawObjectOnCanvas(canvasContext) {
		canvasContext.beginPath();
		canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		canvasContext.fillStyle = this.color;
		canvasContext.fill();
	}

	static getDistance(x1, y1, x2, y2) {
		let xDistance = x2 - x1;
		let yDistance = y2 - y1;
		return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
	}
}
