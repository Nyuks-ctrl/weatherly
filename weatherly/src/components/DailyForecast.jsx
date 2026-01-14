export default function DailyForecast({ daily }) {
return (
<div className="card" style={{ marginTop: 20 }}>
<h3 style={{ marginBottom: 12 }}>7-Day Forecast</h3>
<div className="scroll">
{daily.time.map((day, i) => (
<div key={day} className="day">
<span>{new Date(day).toLocaleDateString(undefined, { weekday: 'short' })}</span>
<span>{daily.temperature_2m_max[i]}°</span>
</div>
))}
</div>
</div>
);
}