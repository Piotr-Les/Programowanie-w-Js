class NotesLs extends NoteUi {
	static addNotesToLs(note) {
		const notes = NotesLs.getNotesFromLs();
		console.log(notes);
		notes.push(note);
		localStorage.setItem('notes', JSON.stringify(notes));
	}
	static getNotesFromLs() {
		let notes;
		if (localStorage.getItem('notes') === null) {
			notes = [];
		} else {
			notes = JSON.parse(localStorage.getItem('notes'));
		}
		return notes;
	}
	static displayNotesFromLs() {
		const notes = NotesLs.getNotesFromLs();
		notes.forEach((note) => {
			let noteObj = new NoteUi(note.id, note.message, note.title, note.date);
			noteObj.addNoteToUi();
		});
	}
	static removeNoteFromLs() {}
}
