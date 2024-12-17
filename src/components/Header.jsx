import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import musicData from "../data/musicData.json";
function Header() {
  const { state } = useContext(MusicContext);
  const { currentTrackIndex } = state;
  return (
    <div className="text-center w-full mt-4 text-white">
      <h4>Music Player</h4>
      <h2 className="text-xl font-bold">
        {musicData[currentTrackIndex].title}
      </h2>
      <h4>{musicData[currentTrackIndex].artist}</h4>
    </div>
  );
}

export default Header;
