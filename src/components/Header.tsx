import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import profileLogo from "../assets/profile_logo.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((store: RootState) => store.user);
  const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }


  return (
    <div className="absolute px-20 py-6 bg-linear-to-b from-black w-full flex justify-between z-20">
      <img
        className="w-38 min-w-38 h-auto shrink-0 object-contain"
        src={logo}
        alt="Logo"
      />
      <button 
      onClick={handleGptSearch}
      className="ml-240 bg-white/20 hover:bg-white/15 px-4 py-2 rounded text-base text-white flex flex-row items-center gap-1 font-semibold cursor-pointer">
        {showGptSearch? "HomePage" : "Gpt Search"}
      </button>

      {user && (
        <div className="relative">
          <div
            onClick={handleIsOpen}
            className="flex items-center gap-1 px-2 py-1 hover:bg-white/20  rounded-sm transition-all duration-200 cursor-pointer"
          >
            <img
              className="w-8 h-8 object-cover"
              src={profileLogo}
              alt="Profile"
            />
            <ChevronDown
              className={`text-white mt-0.5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              size={18}
            />
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white/20 shadow-xl overflow-hidden z-50">
              {/* <p className="px-4 py-2 text-sm text-gray-300 border-b border-gray-700">{user?.displayName}</p> */}
              <button
                onClick={handleSignout}
                className="w-full text-left px-4 py-2 text-sm text-red-400 bg-white/20 hover:bg-white/10 hover:text-red-300 transition-colors duration-150 cursor-pointer"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
