import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLoginLogout, setBtnLoginLogout] = useState("Login");

  console.log("Header Rendered");

  //if there is no dependency => it will render every time
  //if there is dependency array = [] => this will render only during initialization (only once)
  //if there is dependency array = [btnLoginLogout] whenever it changes it will get render everytime
  useEffect(() => {
    console.log("Use Effect rendered");
  });

  const onlineStatus = useOnlineStatus();

  //useContext Hook
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a Selector hook provided by react-redux
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <img src={LOGO_URL} alt="logo" className="w-56" />
      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "Online 🟢" : "Offline 🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          <li>
            <button
              className="login btn btn-blue"
              onClick={() => {
                btnLoginLogout == "Login"
                  ? setBtnLoginLogout("Logout")
                  : setBtnLoginLogout("Login");
              }}
            >
              {btnLoginLogout}
            </button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
