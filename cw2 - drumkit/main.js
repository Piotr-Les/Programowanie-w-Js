document.addEventListener('DOMContentLoaded', () => {
	const keys = document.querySelectorAll('.key');
	const recordButtons = document.querySelectorAll('.record');
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

	document.addEventListener('keydown', (e) => {
		if (e.repeat) return;
		const evKey = e.key.toUpperCase();
		let key;
		if (objArr.some((el) => el.keyLetter == evKey)) {
			key = objArr.find((el) => el.keyLetter == evKey);
			key.playSound();
		}
		if (ChanArr.some((el) => el.isrecording == true)) {
			channel = ChanArr.find((el) => el.isrecording == true);
			channel.recordkey(key);
		}
	});
});
