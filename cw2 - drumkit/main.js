document.addEventListener('DOMContentLoaded', () => {
	const keys = document.querySelectorAll('.key');
	const recordButtons = document.querySelectorAll('.record');
	const playButtons = document.querySelectorAll('.play');
	let isrecording = false;
	let objArr = [];
	let ChanArr = [];
	keys.forEach((keyItem) => {
		const key = new KeyObj(keyItem);
		objArr.push(key);
		keyItem.addEventListener('click', () => key.playSound());
	});

	recordButtons.forEach((recordButton, index) => {
		const channel = new Channel(recordButton, index);
		ChanArr.push(channel);
		recordButton.addEventListener('click', () => {
			channel.toggleRecording();
		});
	});

	playButtons.forEach((playButton) => {
		playButton.addEventListener('click', () => {
			let channel = ChanArr.find((el) => el.playButton == playButton);
			channel.playBeat();
		});
	});

	document.addEventListener('keydown', (e) => {
		const evKey = e.key.toUpperCase();
		let key;
		if (objArr.some((el) => el.keyLetter == evKey)) {
			key = objArr.find((el) => el.keyLetter == evKey);
			key.playSound();
		}
		if (ChanArr.some((el) => el.isrecording == true)) {
			let channel = ChanArr.find((el) => el.isrecording == true);
			channel.recordkey(key);
		}
	});
});
