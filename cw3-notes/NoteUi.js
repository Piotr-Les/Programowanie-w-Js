class NoteUi {
	constructor(message = '', title = '', date) {
		// zrobićpoprawne id
		// this.id = id;
		this.message = message;
		this.title = title;
		this.pinned = false;
		this.date = date;
	}
	static getFieldFromId(id) {
		return document.getElementById(id);
	}
	static clearFields(arr) {
		arr[0].value = '';
		arr[1].value = '';
	}
	static appendNoteElem(parent, arr) {
		arr.forEach((arrElem) => {
			parent.appendChild(arrElem);
		});
	}
	createNotePin() {
		const pin = document.createElement('i');
		pin.classList.add('fas');
		pin.classList.add('fa-thumbtack');
		pin.classList.add('pin');
		return pin;
	}
	createNoteDelete() {
		const del = document.createElement('i');
		del.classList.add('fas');
		del.classList.add('fa-times');
		del.classList.add('close');
		return del;
	}
	createNoteDiv() {
		const noteDiv = document.createElement('div');
		noteDiv.className = 'note';
		return noteDiv;
	}
	createNoteTitle() {
		const noteTitle = document.createElement('h4');
		const titleText = document.createTextNode(this.title);
		noteTitle.appendChild(titleText);
		return noteTitle;
	}
	createNoteMessage() {
		const noteMessage = document.createElement('p');
		const messageText = document.createTextNode(this.message);
		noteMessage.appendChild(messageText);
		return noteMessage;
	}
	static getNoteDate() {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let hours = date.getHours();
		let minutes = setMinutes(date);
		function setMinutes(date) {
			if (date.getMinutes() < 10) {
				return `0${date.getMinutes()}`;
			} else {
				return date.getMinutes();
			}
		}
		let dateStr = `${year}/${month}/${day} ${hours}:${minutes}`;
		return dateStr;
	}
	createNoteDate() {
		const noteDate = document.createElement('p');
		let noteDateText = document.createTextNode(this.date);
		noteDate.appendChild(noteDateText);
		return noteDate;
	}
	getNoteElements() {
		const noteTitle = this.createNoteTitle();
		const noteMessage = this.createNoteMessage();
		const noteDate = this.createNoteDate();
		const notePin = this.createNotePin();
		const noteDel = this.createNoteDelete();
		let noteElementsArray = [
			noteTitle,
			noteMessage,
			noteDate,
			notePin,
			noteDel,
		];
		return noteElementsArray;
	}

	createNoteUi() {
		const noteDiv = this.createNoteDiv();
		NoteUi.appendNoteElem(noteDiv, this.getNoteElements());
		return noteDiv;
	}
	static addNoteUiToHtml(note) {
		const noteContainer = document.querySelector('.notes-list');
		noteContainer.appendChild(note);
	}
	addNoteToUi() {
		NoteUi.addNoteUiToHtml(this.createNoteUi());
	}
	static removeNoteFromUi(e) {
		e.target.parentElement.remove();
	}
}
