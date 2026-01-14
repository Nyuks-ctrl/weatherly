import { useState } from 'react';


export default function SearchBar({ onSelect }) {
const [query, setQuery] = useState('');


async function searchCity() {
if (!query) return;
const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
const data = await res.json();
if (data.length > 0) {
onSelect({
name: data[0].display_name.split(',')[0],
lat: data[0].lat,
lon: data[0].lon
});
setQuery('');
}
}


return (
<div className="card" style={{ marginBottom: 20 }}>
<input
value={query}
onChange={e => setQuery(e.target.value)}
placeholder="Search city"
className="search"
/>
</div>
);
}