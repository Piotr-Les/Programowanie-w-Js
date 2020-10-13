const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const targetImg = document.querySelector('.target-img');
const gtargets = document.querySelectorAll('[data-gtarget]');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');

gtargets.forEach((gtarget) => {
	gtarget.addEventListener('click', () => {

		let data = parseInt( gtarget.dataset.gtarget);
		modal.classList.add('active');
		overlay.classList.add('active');
		targetImg.src = `https://picsum.photos/400/200?random=${data}`;
		// previous button
		b1.addEventListener('click', () => {
			data==1 ? data=1 : data=data-1;
			targetImg.src = `https://picsum.photos/400/200?random=${data}`;
		});
		// next button
		b2.addEventListener('click', () => {
			data==6 ? data=6 : data=data+1;
			targetImg.src = `https://picsum.photos/400/200?random=${data}`;
		});
	});
	
});

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modal.classList.remove('active');
		overlay.classList.remove('active');
	}
});
