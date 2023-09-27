// src/spotifyAuth.ts
import axios from 'axios';

const client = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;
const redirect = process.env.REDIRECT_URI

export const getAccessToken = async (code: string) => {
  const auth = btoa(`${client}:${secret}`);
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', `grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token', error);
    return null;
  }
};

