class KeyObj {
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
