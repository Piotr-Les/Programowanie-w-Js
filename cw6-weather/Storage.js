class Storage {
	static addItemToLs(item, name) {
		const items = Storage.getItemsFromLs(name);
		items.push(item);
		localStorage.setItem(`${name}`, JSON.stringify(items));
	}
	static getItemsFromLs(name) {
		let items;
		if (localStorage.getItem(`${name}`) === null) {
			items = [];
		} else {
			items = JSON.parse(localStorage.getItem(`${name}`));
		}
		return items;
	}

	static removeItemFromLs(target, name) {
		let items = Storage.getItemsFromLs(name);
		items.forEach((item, index) => {
			if (`cancel ${item.id}` == target) {
				items.splice(index, 1);
			}
		});
		localStorage.setItem(`${name}`, JSON.stringify(items));
	}
	static clearLs(name) {
		items = [];
		localStorage.setItem(`${name}`, JSON.stringify(items));
	}
}
