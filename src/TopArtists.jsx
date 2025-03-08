import { useEffect, useState } from "react";

const TopArtists = ({ token }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (!token) return;

    const fetchTopArtists = async () => {
      const response = await fetch("https://api.spotify.com/v1/me/top/artists?limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setArtists(data.items || []);
    };

    fetchTopArtists();
  }, [token]);

  return (
    <div className='pb-10'>
      <h2 className='mb-5'>Your Top 10 Artists</h2>
      <div className='flex flex-col items-center gap-5'>
        {artists.map((artist, i) => (
          <div className='card bg-base-100 w-96 shadow-md' key={artist.id}>
            <figure className="px-10 pt-10">
                <img src={artist.images[0]?.url} alt={artist.name} className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{i+1}. {artist.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
