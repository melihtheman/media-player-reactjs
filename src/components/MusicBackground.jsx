import { useContext } from "react";
import discImage from "../assets/disc.png";
import { MusicContext } from "../context/MusicContext";

function MusicBackground() {
  const { state } = useContext(MusicContext);
  return (
    <div
      className={`flex justify-center mt-5  ${
        state.isPlaying ? "animate-spin-slow" : ""
      }`}
    >
      <img className="w-1/2" src={discImage} />
    </div>
  );
}

export default MusicBackground;
