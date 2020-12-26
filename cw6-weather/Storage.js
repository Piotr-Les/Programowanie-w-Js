class Storage {
	static addItemToLs(item, name) {
		const items = Storage.getItemsFromLs();
		items.push(item);
		localStorage.setItem(`${name}`, JSON.stringify(items));
	}
	static getItemsFromLs(name) {
		let items;
		if (localStorage.getItem(`${name}`) === null) {
			items = [];
		} else {
			items = JSON.parse(localStorage.getItem(`${name}`));
		}
		return items;
	}
	// static displayItemsFromLs() {
	// 	const notes = Storage.getNotesFromLs();
	// 	notes.forEach((note) => {
	// 		let noteObj = new NoteUi(
	// 			note.message,
	// 			note.title,
	// 			note.color,
	// 			note.pinned,
	// 			note.date
	// 		);
	// 		noteObj.addNoteToUi();
	// 	});
	// }
	// static removeItemFromLs(target) {
	// 	const notes = Storage.getNotesFromLs();
	// 	notes.forEach((note, index) => {
	// 		if (note.date == target) {
	// 			notes.splice(index, 1);
	// 		}
	// 	});
	// 	localStorage.setItem('notes', JSON.stringify(notes));
	// }
}
