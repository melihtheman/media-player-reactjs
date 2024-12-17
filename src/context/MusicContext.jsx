/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initialState = {
  currentTrackIndex: 0,
  isPlaying: false,
  duration: null,
  passedTime: 0,
  currentTrack: "/src/assets/music/song1.mp3",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_TRACK_INDEX":
      return { ...state, currentTrackIndex: action.payload };
    case "SET_IS_PLAYING":
      return { ...state, isPlaying: action.payload };
    case "SET_DURATION":
      return { ...state, duration: action.payload };
    case "SET_PASSED_TIME":
      return { ...state, passedTime: action.payload };
    case "SET_CURRENT_TRACK":
      return { ...state, currentTrack: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const MusicContext = createContext();

function MusicProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MusicContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
}

export { MusicProvider, MusicContext };
