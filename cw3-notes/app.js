const plus = document.querySelector('.plus');

plus.addEventListener('click', onPlusClick);

function onPlusClick() {
	const form = document.querySelector('.input-wrapper');
	form.classList.toggle('active');
	plus.classList.toggle('active');
	document.getElementById('message').focus();
	form.addEventListener('submit', (e) => onFormSubmit(e));
}

function onFormSubmit(e) {
	const message = NoteUi.getFieldFromId('message');
	const title = NoteUi.getFieldFromId('title');
	const note = new NoteUi(message.value, title.value, NoteUi.getNoteDate());
	note.addNoteToUi();

	NotesLs.addNotesToLs(note);
	NoteUi.clearFields([message, title]);
	e.preventDefault();
}
const noteCont = document.querySelector('.notes-list');
noteCont.addEventListener('click', (e) => {
	if (e.target.classList.contains('close')) {
		NoteUi.removeNoteFromUi(e);
	} else if (e.target.classList.contains('pin')) {
	}
});

document.addEventListener('DOMContentLoaded', NotesLs.displayNotesFromLs);
