const api = {
	key: '1d67bd99ce3a9b7d8a4fc26e5417102e',
	defUrl: 'https://api.openweathermap.org/data/2.5/',
};
let items;
let itemsToUpdate;

document.addEventListener('DOMContentLoaded', initApp);
function initApp() {
	items = Storage.getItemsFromLs('items');
	items.forEach((item) => {
		const cWF = new CurrentWeatherForecast(
			item.id,
			item.name,
			item.temp,
			item.humidity,
			item.description,
			item.icon
		);
		cWF.addForecastToUi();
	});
}
document.addEventListener('submit', (e) => onQuerySubmit(e));

function onQuerySubmit(e) {
	let city = document.querySelector('.query-input').value;
	GetQueryData(city);

	e.preventDefault();
}
function GetQueryData(value) {
	fetch(`${api.defUrl}weather?q=${value}&appid=${api.key}`)
		.then((res) => res.json())
		.then((res) => initObject(res));
}
function initObject(res) {
	items = Storage.getItemsFromLs('items');
	//console.log(res);
	let name = `${res.name}, ${res.sys.country}`;
	let temp = `${Math.round(res.main.temp - 273.15)}°C`;
	let humidity = `Humidity: ${res.main.humidity}%`;
	let description = res.weather[0].description;
	let icon = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
	let item = new CurrentWeatherForecast(
		items.length,
		name,
		temp,
		humidity,
		description,
		icon
	);
	Storage.addItemToLs(item, 'items');
	item.addForecastToUi();
	//console.log(item);
}
document.addEventListener('click', (e) => {
	if (e.target.classList.contains('cancel')) {
		CurrentWeatherForecast.removeItemFromUi(e.target.parentElement);
		//console.log(e.target.className);
		Storage.removeItemFromLs(e.target.className, 'items');
	}
});

setInterval(updateForecast, 120000);
function updateForecast() {
	itemsToUpdate = Storage.getItemsFromLs('items');
	Storage.clearLs('items');
	CurrentWeatherForecast.ClearUi();
	itemsToUpdate.forEach((item) => {
		GetQueryData(item.name);
	});
}
