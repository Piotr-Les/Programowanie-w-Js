class Channel {
	constructor(recordButton, name) {
		this.name = name;
		this.recordButton = recordButton;
		this.playButton = recordButton.nextSibling.nextSibling;
		this.isrecording = false;
		this.recordingStartTime;
		this.beat;
	}
	isRecording() {
		return this.recordButton.classList.contains('active');
	}
	recordkey(key) {
		this.beat.push({
			key: key,
			startTime: Date.now() - this.recordingStartTime,
		});
	}
	playBitSound(sound) {
		let key = sound.key;
		let keyID = document.getElementById(key.keySoundId);
		keyID.play();
		KeyObj.animateUiElement(key.uiElement);
	}
	playBeat() {
		if (this.beat.lenght === 0) return;
		this.beat.forEach((sound) => {
			setTimeout(() => {
				this.playBitSound(sound);
			}, sound.startTime);
		});
	}
	startRecording() {
		this.recordingStartTime = Date.now();
		this.beat = [];
	}
	stopRecording() {
		this.playButton.classList.add('show');
		this.playBeat();
	}
	toggleRecording() {
		this.recordButton.classList.toggle('active');
		if (this.isRecording()) {
			this.isrecording = true;
			this.startRecording();
		} else {
			this.isrecording = false;
			this.stopRecording();
		}
	}
}
