const citySearchForm = document.getElementById('submit-city-form');
const citySearchInput = document.getElementById('city-search-input');
const weatherInfoContainer = document.querySelector('.weather-info-container');

citySearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let search = citySearchInput.value;
    getCityData(search);
    citySearchInput.value = '';
});

function displayCityData(cityData) {
    weatherInfoContainer.innerHTML = '';
    console.log(cityData);

    const country = cityData.location.country;
    const cityName = cityData.location.name;
    const tempCelcius = cityData.current.temp_c;
    const windKph = cityData.current.wind_kph;
    const humidity = cityData.current.humidity;

    const countryUI = document.createElement('p');
    const cityNameUI = document.createElement('p');
    const tempUI = document.createElement('p');
    const windUI = document.createElement('p');
    const humidityUI = document.createElement('p');

    countryUI.textContent = country;
    cityNameUI.textContent = cityName;
    tempUI.textContent = tempCelcius + ' °C';
    windUI.textContent = windKph + ' km/h';
    humidityUI.textContent = humidity + ' %';

    weatherInfoContainer.appendChild(countryUI);
    weatherInfoContainer.appendChild(cityNameUI);
    weatherInfoContainer.appendChild(tempUI);
    weatherInfoContainer.appendChild(windUI);
    weatherInfoContainer.appendChild(humidityUI);
}

async function getCityData(search) {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=559a7c905bfe492587b155122232208&q=${search}`, {mode: 'cors'});
    let cityData = await response.json();
    displayCityData(cityData);
}

getCityData('London');