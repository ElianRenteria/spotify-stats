import "./App.css";
import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import TopArtists from "./TopArtists";

function App() {
  const [token, setToken] = useState(localStorage.getItem("spotify_access_token") || null);

  useEffect(() => {
    // Extract access token from URL after redirect
    const hash = window.location.hash;
    let accessToken = new URLSearchParams(hash.replace("#", "?")).get("access_token");

    if (accessToken) {
      setToken(accessToken);
      window.localStorage.setItem("spotify_access_token", accessToken); // Store token for later use
      window.location.hash = ""; // Remove token from URL
    }
  }, []);

  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <h1 className='mt-5'>Spotify Top Artists</h1>
      {!token ? <LoginButton /> : <TopArtists token={token} />}
    </div>
  );
}

export default App;
