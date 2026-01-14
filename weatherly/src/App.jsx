import { useEffect, useState } from 'react';
import { getWeather } from './services/weatherService';
import { getUserLocation } from './services/locationService';
import SearchBar from './components/SearchBar';
import AnimatedIcon from './components/AnimatedIcon';
import HourlyForecast from './components/HourlyForecast';

import DailyForecast from './components/DailyForecast';



export default function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    getUserLocation()
      .then(loc => loadWeather(loc.lat, loc.lon, 'Your Location'))
      .catch(() => loadWeather(-26.2041, 28.0473, 'Johannesburg'));
  }, []);

  async function loadWeather(lat, lon, name) {
    const data = await getWeather(lat, lon);
    setWeather(data);
    setCity(name);
  }

  if (!weather) return <div>Loading...</div>;

return (
<div className="app">
<SearchBar onSelect={c => loadWeather(c.lat, c.lon, c.name)} />


<div className="card">
<h1 style={{ fontSize: '1.6rem', marginBottom: 8 }}>{city}</h1>
<AnimatedIcon code={weather.current_weather.weathercode} />
<div style={{ fontSize: '3.5rem', fontWeight: 700 }}>
{Math.round(weather.current_weather.temperature)}°
</div>
</div>


<DailyForecast daily={weather.daily} />
<HourlyForecast hourly={weather.hourly} />

</div>
);
}
