import AnimatedIcon from './AnimatedIcon';

export default function HourlyForecast({ hourly }) {
  return (
    <div className="card" style={{ marginTop: 20 }}>
      <h3 style={{ marginBottom: 12 }}>Hourly Forecast</h3>

      <div className="scroll">
        {hourly.time.slice(0, 12).map((time, i) => (
          <div key={time} className="hour">
            <div className="hour-time">
              {new Date(time).getHours()}:00
            </div>

            <AnimatedIcon code={hourly.weathercode[i]} />

            <div className="hour-temp">
              {Math.round(hourly.temperature_2m[i])}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
