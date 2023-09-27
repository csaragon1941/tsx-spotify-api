import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const tokenEndpoint = process.env.TOKEN_ENDPOINT || '';
const client = process.env.CLIENT_ID || '';
const secret = process.env.CLIENT_SECRET || '';
const redirect = process.env.REDIRECT_URI || '';


const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetchAccessToken(code).then(token => {
        if (token) {
          localStorage.setItem("spotify_access_token", token);
          navigate('/dashboard');
        }
      });
    }
  }, []);

  const fetchAccessToken = async (code: string): Promise<string | null> => {
    const body = new URLSearchParams();
    body.append("grant_type", "authorization_code");
    body.append("code", code);
    body.append("redirect_uri", redirect);
    body.append("client_id", client);
    body.append("client_secret", secret);

    try {
      const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching access token", error);
      return null;
    }
  };

  return <div>Redirecting...</div>;
};

export default Callback;
