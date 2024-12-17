import Container from "./components/Container";
import MusicPlayer from "./components/MusicPlayer";
import MusicBackground from "./components/MusicBackground";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Sidebar from "./components/Sidebar";
import MusicItem from "./components/MusicItem";
import musicData from "/src/data/musicData.json";
import { useContext } from "react";
import { MusicContext } from "./context/MusicContext";

function App() {
  const { state, dispatch } = useContext(MusicContext);

  const handleMusicItemClick = (id) => {
    dispatch({
      type: "SET_CURRENT_TRACK_INDEX",
      payload: id - 1,
    });

    const trackUrl =
      musicData[id - 1]?.url || `/src/assets/music/song${id}.mp3`;
    dispatch({
      type: "SET_CURRENT_TRACK",
      payload: trackUrl,
    });

    if (state.isPlaying) {
      dispatch({
        type: "SET_IS_PLAYING",
        payload: false,
      });
      dispatch({
        type: "SET_PASSED_TIME",
        payload: 0,
      });
    }
  };

  return (
    <>
      <Container>
        <Sidebar>
          {musicData.map((item) => {
            return (
              <MusicItem
                key={item.id}
                id={item.id}
                selected={state.currentTrackIndex === item.id - 1}
                title={item.title}
                artist={item.artist}
                album={item.album}
                onClick={handleMusicItemClick}
              />
            );
          })}
        </Sidebar>
        <MusicPlayer>
          <Header />
          <MusicBackground />
          <ProgressBar />
        </MusicPlayer>
      </Container>
    </>
  );
}

export default App;
