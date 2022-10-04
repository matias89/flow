const API_KEY = '2d6d2d0a05e80f086e2d0ada163ebb28';
const API_URL = 'http://api.openweathermap.org/data/2.5/';
const WEATHER_URL = `${API_URL}weather?appid=${API_KEY}`;
const FORECAST_URL = `${API_URL}forecast?appid=${API_KEY}`;
const CITIES = [{
    name: 'Tucumán',
    lat: -26.808285,
    lon: -65.217590,
},{
    name: 'Salta',
    lat: -24.782932,
    lon: -65.412155,
},{
    name: 'Jujuy',
    lat: -24.184340,
    lon: -65.302177,
},{
    name: 'Catamarca',
    lat: -28.469581,
    lon: -65.77954410000001,
},{
    name: 'Santiago Del Estero',
    lat: -27.79511,
    lon: -64.26149,
}];

// TUCUMÁN :)
const DEFAULT_LAT = -26.808285;
const DEFAULT_LON = -65.217590;

export {
    WEATHER_URL,
    FORECAST_URL,
    CITIES,
    DEFAULT_LAT,
    DEFAULT_LON,
};
