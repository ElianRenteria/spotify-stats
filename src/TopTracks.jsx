import { useEffect, useState } from "react";

const TopTracks = ({ token }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (!token) return;

    const fetchTopTracks = async () => {
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTracks(data.items || []);
    };

    fetchTopTracks();
  }, [token]);

  return (
    <div className='pb-10'>
      <h1 className=''>Spotify Stats</h1>
      <h2 className='mb-5'>Your Top 10 Tracks</h2>
      <div className='flex flex-col items-center gap-5'>
        {tracks.map((track, i) => (
          <div className='card bg-base-100 w-96 shadow-md' key={track.id}>
            <figure className="px-10 pt-10">
                <img src={track.album.images[0]?.url} alt={track.name} className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{i+1}. {track.name}</h2>
                <p className='text-sm'>{track.artists.map(artist => artist.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTracks;