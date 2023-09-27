import React, { useState } from 'react';
import { searchTracks } from '../spotifyService';

type Track = {
  id: string;
  name: string;
  // Add other properties if needed
};

const SearchTracks: React.FC = () => {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState<Track[]>([]);

  const handleSearch = async () => {
    const results = await searchTracks(query);
    setTracks(results);
  };


  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTracks;
