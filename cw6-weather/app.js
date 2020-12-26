const api = {
	key: '1d67bd99ce3a9b7d8a4fc26e5417102e',
	defUrl: 'https://api.openweathermap.org/data/2.5/',
};
let items;
document.addEventListener('load', initApp);
function initApp() {
	items = Storage.getItemsFromLs('items');
}
document.addEventListener('submit', (e) => onQuerySubmit(e));

function onQuerySubmit(e) {
	GetQueryData();
	e.preventDefault();

	function GetQueryData() {
		let city = document.querySelector('.query-input');
		fetch(`${api.defUrl}weather?q=${city.value}&appid=${api.key}`)
			.then((res) => res.json())
			.then((res) => initObject(res));
	}
	function initObject(res) {
		console.log(res);
		let name = `${res.name}, ${res.sys.country}`;
		let temp = res.main.temp;
		let humidity = res.main.humidity;
		let description = res.weather[0].description;
		let icon = res.weather[0].icon;
		let item = new CurrentWeatherForecast(
			name,
			temp,
			humidity,
			description,
			icon
		);
		Storage.addItemToLs(item, 'items');
		console.log(item);
	}
}
