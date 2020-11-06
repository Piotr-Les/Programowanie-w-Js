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
