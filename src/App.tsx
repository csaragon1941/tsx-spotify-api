import { Route, Routes } from 'react-router-dom';
import Callback from './components/Callback';
import SearchTracks from './components/SearchTracks';
import Dashboard from './components/Dashboard';
// ... other imports ...

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "65c0ef8859b5474bbf013d3776949653";
const REDIRECT_URI = "http://localhost:3000/callback";
const SCOPES = "user-top-read"; // Add other scopes if needed

const redirectToSpotifyLogin = () => {
  window.location.href = `${SPOTIFY_AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
};

function App() {
  const isLoggedIn = !!localStorage.getItem("spotify_access_token");

  return (
    <div className="App">
      {!isLoggedIn && <button onClick={redirectToSpotifyLogin}>Login with Spotify</button>}
      <Routes>
        <Route path="/searchtracks" element={<SearchTracks />} />
        <Route path="/callback" element={<Callback />} />
        {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
        {/* ... other routes ... */}
      </Routes>
    </div>
  );
}

export default App

