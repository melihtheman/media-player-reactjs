# Media Player

A React-based media player application built using **Context API** and **Reducer** for efficient state management. This project offers seamless playback controls, dynamic track handling, and an intuitive user interface.

## Features

- 🎵 **Play, Pause, Skip, and Previous Controls**
- 📜 **Real-time Progress Bar**
- ⏲️ **Duration and Time Tracking**
- 🔊 **Dynamic Audio Track Handling**
- 💡 **Lightweight and Optimized State Management**

## Tech Stack

- **React.js**: Frontend framework for building the user interface
- **Context API**: For managing global state
- **Reducer**: For updating state in a predictable way
- **CSS**: For styling the application

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/media-player.git
   ```

2. Navigate to the project directory:
   ```bash
   cd media-player
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

1. Add your audio files to the `data/musicData.json` file in the following format:
   ```json
   [
     {
       "id": 1,
       "title": "Track 1",
       "url": "path/to/track1.mp3"
     },
     {
       "id": 2,
       "title": "Track 2",
       "url": "path/to/track2.mp3"
     }
   ]
   ```

2. Use the playback controls to play, pause, skip, or go to the previous track.

## File Structure

```
src/
├── components/
│   ├── ProgressBar.js   # Displays the progress bar and playback controls
├── context/
│   ├── MusicContext.js  # Context API for state management
├── data/
│   ├── musicData.json   # Contains the list of audio tracks
├── App.js               # Root component
└── index.js             # Entry point
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by modern music player designs.
- Built with ❤️ using React.

---

Enjoy the app and feel free to share your feedback!
