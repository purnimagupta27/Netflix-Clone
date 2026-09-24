import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import profileLogo from "../assets/profile_logo.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import type { RootState } from "../utils/appStore";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const user = useSelector((store: RootState) => store.user);

  const handleIsOpen = () => {
    console.log(user?.displayName)
    setIsOpen(!isOpen)
  }

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        navigate("/error")
      });
  };

  return (
    <div className="absolute px-20 py-6 bg-linear-to-b from-black w-screen flex justify-between">
      <img
        className="w-38 min-w-38 h-auto shrink-0 object-contain"
        src={logo}
        alt="Logo"
      />
      {user && (
        <div
          onClick={handleIsOpen}
          className="flex gap-1 hover:bg-gray-800 hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          <img className="w-8 h-8" src={profileLogo} alt="Profile" />
          <ChevronDown className="text-white mt-1" />
        </div>
      )}
      {isOpen && (
        <div>
          <p>{user?.displayName}</p>
          <button onClick={handleSignout}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;