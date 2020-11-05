const message = document.querySelector('.message');
const title = document.querySelector('.title');
const form = document.querySelector('.input-wrapper');
const colors = document.querySelectorAll('[data-color]');
let nColor = '2f2f2f';
document.body.addEventListener('click', (e) => {
	const expandable = document.querySelector('.expandable');
	if (
		e.target == message ||
		e.target.parentElement.classList.contains('expandable') ||
		e.target.parentElement.classList.contains('color-pick')
	) {
		expandable.classList.add('expand');
		message.classList.add('expand');
		colorPick();
	} else {
		expandable.classList.remove('expand');
		message.classList.remove('expand');
	}
});
//color pick function
function colorPick() {
	colors.forEach((color) => {
		color.addEventListener('click', () => {
			nColor = color.dataset.color;
		});
	});
}

form.addEventListener('submit', (e) => {
	nMess = message.value;
	nTitle = title.value;
	// inicjalizacja obiektów
	const note = new Note(nMess, nTitle, nColor);
	const ui = new UI();

	ui.addNoteToList(note);
	console.log(note);
	message.value = '';
	title.value = '';
	nColor = '2f2f2f';
	e.preventDefault();
});
// Constructors
function Note(message, title = '', color) {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	this.message = message;
	this.title = title;
	this.color = color;
	this.date = today.toLocaleDateString();
}
function UI() {}
UI.prototype.addNoteToList = (note) => {
	const list = document.querySelector('.notes-list');
	const nDiv = document.createElement('div');
	nDiv.className = 'note';
	nDiv.style.border = `5px solid #${note.color}`;
	nDiv.innerHTML = `
	<h4>${note.title}</h4>
	<p>${note.message}</p>
	<p>${note.date}</p>
	<i class="close fas fa-times"></i>
	<i class="pin fas fa-thumbtack"></i>
	`;
	list.appendChild(nDiv);
};
