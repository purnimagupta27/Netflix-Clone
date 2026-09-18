import { useState } from "react";
import backgroundImage from "../assets/bg_image.png";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative">
      <Header />
      <img
        className="w-full h-screen object-cover"
        src={backgroundImage}
        alt="Background-Image"
      />

      <form className=" h-130 absolute w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-black/80 text-white">
        <h2 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h2>

        {!isSignInForm && <input
          type="text"
          placeholder="Full name"
          className="p-4 mt-4 bg-zinc-800 text-sm w-full rounded-sm"
        />}

        <input
          type="email"
          placeholder="Email address or Phone number"
          className="p-4 mt-6 bg-zinc-800 text-sm w-full rounded-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mt-6 text-sm w-full bg-zinc-800 rounded-sm"
        />

        <button type="button" className="bg-red-700 text-white w-full p-4 mt-6 text-sm font-semibold rounded-sm cursor-pointer hover:shadow-lg hover:shadow-black/40">
          {isSignInForm? "Sign In": "Sign Up"}
        </button>

        <p className="text-xs mt-6 w-full font-semibold">
          {isSignInForm? "New to Netflix?": "Already a user?"}
          <span className="underline cursor-pointer ml-1" onClick={toggleSignIn}>
            {isSignInForm? "Sign Up now": "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
