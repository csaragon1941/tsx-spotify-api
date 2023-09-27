import React, { useEffect, useState } from 'react';
import { fetchTopTracks, fetchTopArtists } from '../spotifyService';

type Track = {
  id: string;
  name: string;
  artists: { id: string; name: string }[];
};

type Artist = {
  id: string;
  name: string;
};

const Dashboard: React.FC = () => {
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const loadTopTracks = async () => {
      const tracks = await fetchTopTracks();
      setTopTracks(tracks);
    };

    const loadTopArtists = async () => {
      const artists = await fetchTopArtists();
      setTopArtists(artists);
    };

    loadTopTracks();
    loadTopArtists();
  }, []);

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {topTracks.map(track => (
          <li key={track.id}>{track.name} by {track.artists[0].name}</li>
        ))}
      </ul>

      <h2>Top Artists</h2>
      <ul>
        {topArtists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
