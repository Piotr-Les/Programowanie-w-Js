class CurrentWeatherForecast {
	constructor(name, temp, humidity, description, icon) {
		this.name = name;
		this.temp = `${Math.round(temp - 273.15)}°C`;
		this.humidity = `${humidity}%`;
		this.description = description;
		this.icon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	}
}
