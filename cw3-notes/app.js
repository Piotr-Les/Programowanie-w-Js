const plus = document.querySelector('.plus');
plus.addEventListener('click', onPlusClick);

function onPlusClick() {
	const form = document.querySelector('.input-wrapper');
	form.classList.toggle('active');
	plus.classList.toggle('active');
}
