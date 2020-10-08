const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const targetImg = document.querySelector('.target-img');
const gtargets = document.querySelectorAll('[data-gtarget]');
const b1 = document.querySelectorAll('.b1');
const b2 = document.querySelectorAll('.b2');

gtargets.forEach((gtarget) => {
	gtarget.addEventListener('click', (e) => {
		modal.classList.add('active');
		overlay.classList.add('active');
		targetImg.src = e.target.src;
	});
});
// b1.addEventListener("click" ()=>{
//   targetImg.src =
// })

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modal.classList.remove('active');
		overlay.classList.remove('active');
	}
});
