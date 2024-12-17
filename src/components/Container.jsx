/* eslint-disable react/prop-types */
import backgroundImage from "../assets/background.jpg";
function Container({ children }) {
  return (
    <div
      className=" w-full h-screen flex justify-center font-poppins"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
}

export default Container;
