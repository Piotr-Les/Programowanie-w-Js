const plus = document.querySelector('.plus');
const NotesArr = NotesLs.getNotesFromLs();

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
	const color = NoteUi.getNoteColor();
	const note = new NoteUi(
		message.value,
		title.value,
		color,
		false,
		NoteUi.getNoteDate()
	);
	note.addNoteToUi();
	NotesArr.push(note);
	NotesLs.addNotesToLs(note);
	NoteUi.clearFields([message, title]);
	e.preventDefault();
}

document.addEventListener('DOMContentLoaded', NotesLs.displayNotesFromLs);
const noteCont = document.querySelector('.notes-list');
noteCont.addEventListener('click', (e) => {
	if (e.target.classList.contains('close')) {
		NoteUi.removeNoteFromUi(e);
		NotesLs.removeNoteFromLs(e.target.previousElementSibling.textContent);
	} else if (e.target.classList.contains('pin')) {
		NoteUi.pinNote(e.target, NotesArr);
	}
});
