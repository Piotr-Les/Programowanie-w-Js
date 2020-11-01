const expandable = document.querySelector('.expandable');
const message = document.querySelector('.message');
const title = document.querySelector('.title');

document.body.addEventListener('click', (e) => {
	if (
		e.target == message ||
		e.target.parentElement.classList.contains('expandable') ||
		e.target.parentElement.classList.contains('color-pick')
	) {
		expandable.classList.add('expand');

		message.classList.add('expand');
	} else {
		expandable.classList.remove('expand');

		message.classList.remove('expand');
	}
});
