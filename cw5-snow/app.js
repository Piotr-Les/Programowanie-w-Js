const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let snowfalakesNumber = 200;
let snowflakesArray = [];
let w, h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;
function random(min, max) {
	return min + Math.random() * (max - min + 1);
}
function clientResize(ev) {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', clientResize);
