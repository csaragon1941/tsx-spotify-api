// src/spotifyService.ts
import axios from 'axios';

export const searchTracks = async (query: string) => {
  const token = localStorage.getItem('spotify_access_token');
  if (!token) return [];

  try {
    const response = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data.tracks.items;
  } catch (error) {
    console.error('Error searching tracks', error);
    return [];
  }
};



export const fetchTopTracks = async () => {
  const token = localStorage.getItem('spotify_access_token');
  if (!token) return [];

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching top tracks', error);
    return [];
  }
};


export const fetchTopArtists = async () => {
  const token = localStorage.getItem('spotify_access_token');
  if (!token) return [];

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching top artists', error);
    return [];
  }
};


