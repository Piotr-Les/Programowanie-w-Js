class keyObj {
	constructor(selector) {
		this.uiElement = selector;
		this.keySoundId = selector.dataset.sound;
		this.keyLetter = selector.textContent;
	}
	getAudioTag(id) {
		return document.getElementById(id);
	}
	animateUiElement(element) {
		element.classList.add('playing');
		element.addEventListener('transitionend', () => {
			element.classList.remove('playing');
		});
	}
	playSound() {
		const keySound = this.getAudioTag(this.keySoundId);
		keySound.currentTime = 0;
		keySound.play();
		this.animateUiElement(this.uiElement);
	}
}

const keys = document.querySelectorAll('.key');
let objArr = [];
keys.forEach((keyItem) => {
	const key = new keyObj(keyItem);
	objArr.push(key);
	keyItem.addEventListener('click', () => key.playSound());
});
document.addEventListener('keydown', (e) => {
	const evKey = e.key.toUpperCase();
	let key;
	if (objArr.some((el) => el.keyLetter == evKey)) {
		key = objArr.find((el) => el.keyLetter == evKey);
		key.playSound();
	}
});
