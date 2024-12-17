/* eslint-disable react/prop-types */
function Sidebar({ children }) {
  return (
    <div className={`bg-black w-80 h-screen absolute left-0 top-0 p-2`}>
      {children}
    </div>
  );
}

export default Sidebar;
