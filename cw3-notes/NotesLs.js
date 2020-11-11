class NotesLs extends NoteUi {
	static addNotesToLs(note) {
		const notes = NotesLs.getNotesFromLs();
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
			let noteObj = new NoteUi(
				note.message,
				note.title,
				note.color,
				note.pinned,
				note.date
			);
			noteObj.addNoteToUi();
		});
	}
	static removeNoteFromLs(target) {
		const notes = NotesLs.getNotesFromLs();
		notes.forEach((note, index) => {
			if (note.date == target) {
				notes.splice(index, 1);
			}
		});
		localStorage.setItem('notes', JSON.stringify(notes));
	}
}
