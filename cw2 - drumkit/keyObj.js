class KeyObj {
	constructor(selector) {
		this.uiElement = selector;
		this.keySoundId = selector.dataset.sound;
		this.keyLetter = selector.textContent;
	}
	static getAudioTag(id) {
		return document.getElementById(id);
	}
	static animateUiElement(element) {
		element.classList.add('playing');
		element.addEventListener('transitionend', () => {
			element.classList.remove('playing');
		});
	}
	playSound() {
		const keySound = KeyObj.getAudioTag(this.keySoundId);
		keySound.currentTime = 0;
		keySound.play();
		console.log();
		KeyObj.animateUiElement(this.uiElement);
	}
}
