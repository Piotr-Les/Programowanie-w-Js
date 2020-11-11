class NoteUi {
	constructor(message = '', title = '', color, pinned = false, date) {
		this.message = message;
		this.title = title;
		this.color = color;
		this.pinned = pinned;
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
	static getNoteColor() {
		let colorRadios = document.getElementsByName('color');
		let colorVal;
		colorRadios.forEach((color) => {
			if (color.checked) {
				colorVal = color.value;
			}
		});
		return colorVal;
	}
	static setNoteColor(note, color) {
		note.style.borderColor = `#${color}`;
	}
	static pinNote(target, arr) {
		target.classList.toggle('active');
		let parent = target.parentElement;
		parent.classList.toggle('active');
		if (target.classList.contains('active')) {
			let id = target.previousElementSibling.previousElementSibling.textContent;

			arr.forEach((note) => {
				if (note.date == id) {
					NotesLs.removeNoteFromLs(id);
					note.pinned = true;
					NotesLs.addNotesToLs(note);
				}
			});
		} else {
			let id = target.previousElementSibling.previousElementSibling.textContent;
			arr.forEach((note) => {
				if (note.date == id) {
					NotesLs.removeNoteFromLs(id);
					note.pinned = false;
					NotesLs.addNotesToLs(note);
				}
			});
		}
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
		let seconds = setSeconds(date);

		function setMinutes(date) {
			if (date.getMinutes() < 10) {
				return `0${date.getMinutes()}`;
			} else {
				return date.getMinutes();
			}
		}
		function setSeconds(date) {
			if (date.getSeconds() < 10) {
				return `0${date.getSeconds()}`;
			} else {
				return date.getSeconds();
			}
		}
		let dateStr = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
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
			noteDel,
			notePin,
		];
		return noteElementsArray;
	}

	createNoteUi() {
		const noteDiv = this.createNoteDiv();
		NoteUi.appendNoteElem(noteDiv, this.getNoteElements());
		NoteUi.setNoteColor(noteDiv, this.color);
		return noteDiv;
	}
	static addNoteUiToHtml(note) {
		let noteContainer = document.querySelector('.notes-list');
		noteContainer.appendChild(note);
	}
	addNoteToUi() {
		let note = this.createNoteUi();
		let pin = note.firstChild.nextSibling.nextSibling.nextSibling.nextSibling;
		if (this.pinned) {
			pin.classList.add('active');
			note.classList.add('active');
		} else {
			pin.classList.remove('active');
			note.classList.remove('active');
		}
		NoteUi.addNoteUiToHtml(note);
	}
	static removeNoteFromUi(e) {
		e.target.parentElement.remove();
	}
}
