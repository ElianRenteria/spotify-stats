const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = "https://elianrenteria.github.io/spotify-stats"; // Adjust when deploying
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token"; // Implicit Grant Flow (or use Authorization Code Flow with backend)
const SCOPES = "user-top-read"; // Request user's top artists

const LoginButton = () => {
  const login = () => {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
    window.location.href = authUrl; // Redirect to Spotify login
  };
  return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <h1 className='mb-5'>Spotify Stats</h1>
            <button className='btn btn-primary mb-30' onClick={login}>Login with Spotify</button>
        </div>
    );
};

export default LoginButton;
