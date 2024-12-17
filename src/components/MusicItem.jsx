/* eslint-disable react/prop-types */
function MusicItem({ id, artist, title, selected, onClick }) {
  return (
    <div
      className={`flex items-center py-4 px-6 text-white rounded-md mb-4 transition-all duration-100 
          ${selected ? "bg-gray-800" : ""}`}
      onClick={() => onClick(id)}
    >
      <img
        src="../src/assets/disc.png"
        alt="albumname"
        className="w-16 h-16 object-cover rounded-md mr-4"
      />

      <div className="flex flex-col flex-grow">
        <span className="text-sm font-bold text-gray-300">{artist}</span>
        <span className="text-lg font-semibold">{title}</span>
      </div>
    </div>
  );
}

export default MusicItem;
