import { useRef, useState } from "react";
import backgroundImage from "../assets/bg_image.png";
import Header from "./Header";
import { validateInput } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate()

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const checkValidation = () => {
    if (!email.current || !password.current) return;
    const message = validateInput(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <img
        className="w-full h-screen object-cover"
        src={backgroundImage}
        alt="Background-Image"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" h-130 absolute w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-black/80 text-white"
      >
        <h2 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 mt-4 bg-zinc-800 text-sm w-full rounded-sm"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email address or Phone number"
          className="p-4 mt-6 bg-zinc-800 text-sm w-full rounded-sm"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-6 text-sm w-full bg-zinc-800 rounded-sm"
        />

        <p className="text-red-700 font-semibold text-sm mt-1">{error}</p>

        <button
          onClick={checkValidation}
          type="button"
          className="bg-red-700 text-white w-full p-4 mt-6 text-sm font-semibold rounded-sm cursor-pointer hover:shadow-lg hover:shadow-black/40"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-xs mt-6 w-full font-semibold">
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span
            className="underline cursor-pointer ml-1"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
