/* eslint-disable react/prop-types */

function MusicPlayer({ children }) {
  return (
    <div className="w-1/4 h-3/4 mt-10 backdrop-blur-sm shadow-lg rounded-xl flex justify-center flex-col">
      {children}
    </div>
  );
}

export default MusicPlayer;
