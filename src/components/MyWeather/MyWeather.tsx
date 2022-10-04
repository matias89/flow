import { useEffect, useState, useCallback } from 'react';
import { get } from 'utils/api';
import CitySelector from 'components/CitySelector/CitySelector';
import Card from 'components/Card/Card';
import Spinner from 'components/Spinner/Spinner';
import { WEATHER_URL, DEFAULT_LAT, DEFAULT_LON, FORECAST_URL } from 'constants/index';
import { ICard } from 'components/Card/Card';

import './styles.css';

interface IWeather {
    lat: number;
    lon: number;
};

const MyWeather = () => {

    const [todayInfo, setTodayInfo] = useState<any>(null);
    const [forecastInfo, setForecastInfo] = useState<any>(null);
    const [loadingToday, setLoadingToday] = useState<any>(true);
    const [loadingForecast, setLoadingForecast] = useState<any>(true);

    const getWeather = useCallback(async (lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
        setLoadingToday(true);
        const wheater = await get(WEATHER_URL, {
            lat,
            lon,
        });
        setTodayInfo(wheater);
        setLoadingToday(false);
    }, []);

    const getForecast = useCallback(async (lat = DEFAULT_LAT, lon = DEFAULT_LON) => {
        setLoadingForecast(true);
        const forecast = await get(FORECAST_URL, {
            lat,
            lon,
        });
        setForecastInfo(forecast);
        setLoadingForecast(false);
    }, []);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords: { latitude, longitude }} = position;
                getWeather(latitude, longitude);
                getForecast(latitude, longitude);
            }, (e) => {
                setLoadingForecast(false);
                setLoadingToday(false);
            });
        } else {
            getWeather();
            getForecast();
        }
    }, [getWeather, getForecast]);

    const buildWeather = () => {
        if (!todayInfo) return null;
        const { name, main: { temp_min, temp_max, pressure, temp }, weather, sys: { sunrise, sunset } } = todayInfo;
        const { description, icon } = weather[0];
        return (
            <Card
                name={name}
                temp={temp}
                min={temp_min}
                max={temp_max}
                description={description}
                sunrise={sunrise}
                sunset={sunset}
                pressure={pressure}
                icon={icon}
                highlighted
            />
        );
    };

    const buildForecast = () => {
        if (!forecastInfo) return null;
        const {list, city: { sunset, sunrise } } = forecastInfo;
        const filteredList = list.filter((f: any, i: number) => ((i + 1) % 8) === 0 && f);
        return (
            <>
                <h4>Próximos días</h4>
                <div className="forecast-container">
                    {
                        filteredList.map(({ main: { temp_max, temp_min, pressure }, weather, dt }: ICard) => (
                            <Card
                                min={temp_min}
                                max={temp_max}
                                sunrise={sunrise}
                                sunset={sunset}
                                pressure={pressure}
                                icon={weather[0].icon}
                                dt={dt}
                                key={dt}
                            />
                        ))
                    }
                </div>
            </>
        );
    };

    const handleOnSelect = ({ lat, lon }: IWeather) => {
        getWeather(lat, lon);
        getForecast(lat, lon);
    };

    return (
        <div>
            <CitySelector
                onSelect={handleOnSelect}
            />
            {loadingToday ? <Spinner text="Cargando pronóstico de hoy" /> : buildWeather()}
            {loadingForecast? <Spinner text="Cargando pronóstico de los próximos días" /> : buildForecast()}
        </div>
    );
};

export default MyWeather;
