import { TiMediaPause, TiMediaPlay } from "react-icons/ti";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

import { useContext, useEffect, useRef } from "react";
import { MusicContext } from "../context/MusicContext";

import musicData from "../data/musicData.json";

function ProgressBar() {
  const { state, dispatch } = useContext(MusicContext);
  const { currentTrackIndex, isPlaying, duration, passedTime, currentTrack } =
    state;

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && currentTrack) {
      const handleLoadedMetadata = () => {
        dispatch({ type: "SET_DURATION", payload: audio.duration });
      };

      const updateTime = () => {
        dispatch({
          type: "SET_PASSED_TIME",
          payload: Math.floor(audio.currentTime),
        });
      };

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", updateTime);

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [currentTrack, dispatch]);

  useEffect(() => {
    const trackUrl = musicData[currentTrackIndex]?.url;
    if (trackUrl && trackUrl !== currentTrack) {
      dispatch({ type: "SET_CURRENT_TRACK", payload: trackUrl });
    }
  }, [currentTrackIndex, currentTrack, dispatch]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTrackChange = (index) => {
    dispatch({ type: "SET_PASSED_TIME", payload: 0 });
    dispatch({ type: "SET_IS_PLAYING", payload: false });
    dispatch({ type: "SET_CURRENT_TRACK_INDEX", payload: index });
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % musicData.length;
    handleTrackChange(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentTrackIndex - 1 + musicData.length) % musicData.length;
    handleTrackChange(prevIndex);
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
      dispatch({ type: "SET_IS_PLAYING", payload: true });
    } else {
      audio.pause();
      dispatch({ type: "SET_IS_PLAYING", payload: false });
    }
  };

  return (
    <>
      <div className="flex w-full justify-between px-10">
        <p className="text-sm mt-2 text-white">{formatTime(passedTime)}</p>
        <p className="text-sm mt-2 text-white">
          {duration ? formatTime(duration) : ""}
        </p>
      </div>
      <div className="w-full flex justify-center mt-6 px-10">
        <input
          className="w-full h-1.5 rounded-full cursor-pointer focus:outline-none transition-all duration-200 accent-black"
          type="range"
          max={duration}
          value={passedTime}
        />
        <audio ref={audioRef} key={currentTrack}>
          <source src={currentTrack} type="audio/mp3" />
        </audio>
      </div>
      <div className="w-full flex flex-row justify-center my-5 z-10">
        <MdSkipPrevious
          onClick={handlePrevious}
          className="text-5xl text-white cursor-pointer"
        />
        {isPlaying ? (
          <TiMediaPause
            onClick={togglePlayPause}
            className="text-5xl text-white cursor-pointer"
          />
        ) : (
          <TiMediaPlay
            onClick={togglePlayPause}
            className="text-5xl text-white cursor-pointer"
          />
        )}
        <MdSkipNext
          onClick={handleNext}
          className="text-5xl text-white cursor-pointer"
        />
      </div>
    </>
  );
}

export default ProgressBar;
