import { useState } from "react";
import TopArtists from "./TopArtists";
import TopTracks from "./TopTracks";

const MusicToggle = ({ token }) => {
  const [showArtists, setShowArtists] = useState(true);

  return (
    <div className="flex flex-col items-center gap-0 w-full px-8 py-2">
      <div className='flex justify-end w-full'>
      <label className="toggle text-base-content p-0 m-0 mt-3">
        <input
          type="checkbox"
          onChange={() => setShowArtists(!showArtists)}
        />
        {/* Artist SVG */}
                <svg aria-label="artist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="white" d="M12 2a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 12c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
                </svg>
                {/* Track SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path fill="white" d="M39.038,9.076C31.925,9.076,33.674,6,27,6c-1.6,0-2,1-2,2v21c0,2.214-1.032,4-5,4c-5.661,0-8,1.464-8,5 c0,2.383,0.489,6,7.936,6C26.855,44,27,38.682,27,36c0-1.027,0-3.903,0-7V17c0.005-1.355,0.2-2,1-2c5.138,0,3.871,3,11,3 c0,0,2,0,2-1.699c0-2.555,0-4.363,0-5.333C41,9.435,40.312,9.076,39.038,9.076z"></path>
        </svg>
      </label>
      </div>
      {/* Conditional Rendering */}
      {showArtists ? <TopArtists token={token} /> : <TopTracks token={token} />}
    </div>
  );
};

export default MusicToggle;
