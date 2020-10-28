document.body.addEventListener('keypress', onKeyPress);
document
	.querySelector('#recordBtn')
	.addEventListener('click', onRecordBtnClick);
document.querySelector('#playBtn').addEventListener('click', onPlayBtnClick);
const wr = document.querySelectorAll('.audio-wrapper');
let recordStartTime;
const recordedSounds = [];

function onKeyPress(ev) {
	let soundName;
	switch (ev.code) {
		case 'KeyA':
			soundName = 'boom';
			break;
		case 'KeyS':
			soundName = 'clap';
			break;
		case 'KeyD':
			soundName = 'hihat';
			break;
		case 'KeyF':
			soundName = 'kick';
			break;
		case 'KeyG':
			soundName = 'openhat';
			break;
		case 'KeyH':
			soundName = 'ride';
			break;
		case 'KeyJ':
			soundName = 'snare';
			break;
		case 'KeyK':
			soundName = 'tink';
			break;
		case 'KeyL':
			soundName = 'tom';
			break;
	}
	let wrap = document.querySelector(`#${soundName}`).parentElement;
	wrap.classList.add('playing');
	if (soundName) {
		const soundTime = Date.now() - recordStartTime;
		const soundObj = {
			id: soundName,
			time: soundTime,
		};
		recordedSounds.push(soundObj);
		playSound(soundName);
	}
	setTimeout(() => {
		wrap.classList.remove('playing');
	}, 250);
}

function onRecordBtnClick() {
	recordStartTime = Date.now();
}
function onPlayBtnClick() {
	for (let index = 0; index < recordedSounds.length; index++) {
		const soundObj = recordedSounds[index];
		let wrap = document.querySelector(`#${soundObj.id}`).parentElement;
		setTimeout(() => {
			playSound(soundObj.id);
			wrap.classList.add('playing');
			setTimeout(() => {
				wrap.classList.remove('playing');
			}, 250);
		}, soundObj.time);
	}
}

function playSound(id) {
	const sound = document.querySelector('#' + id);
	sound.currentTime = 0;
	sound.play();
}
