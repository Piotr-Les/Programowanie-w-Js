class CurrentWeatherForecast {
	constructor(id, name, temp, humidity, description, icon) {
		this.id = id;
		this.name = name;
		this.temp = temp;
		this.humidity = humidity;
		this.description = description;
		this.icon = icon;
	}
	static ClearUi() {
		const mainCont = document.querySelector('.main-container');
		while (mainCont.firstChild) {
			mainCont.removeChild(mainCont.firstChild);
		}
	}
	addForecastToUi() {
		const mainCont = document.querySelector('.main-container');
		let FCont = document.createElement('div');
		FCont.className = 'f-item';
		CurrentWeatherForecast.appendForecastElem(
			FCont,
			this.initForecastElements()
		);
		mainCont.appendChild(FCont);
	}
	initForecastElements() {
		const Fname = this.createElement('f4', this.name);
		const Ftemp = this.createElement('p', this.temp);
		const Fhumidity = this.createElement('p', this.humidity);
		const Fimg = this.createIMG(this.icon);
		const Fdescription = this.createElement('p', this.description);
		const del = this.createElement('p', 'X');
		del.className = 'cancel';
		del.classList.add(this.id);

		return [Fname, Ftemp, Fhumidity, Fimg, Fdescription, del];
	}
	createElement(element, text) {
		const ForecastElement = document.createElement(element);
		const elementText = document.createTextNode(text);
		ForecastElement.appendChild(elementText);
		return ForecastElement;
	}
	createIMG(src) {
		const ForecastImg = document.createElement('img');
		ForecastImg.src = src;
		return ForecastImg;
	}
	static appendForecastElem(parent, arr) {
		arr.forEach((arrElem) => {
			parent.appendChild(arrElem);
		});
	}
	static removeItemFromUi(target) {
		target.remove();
	}
}
