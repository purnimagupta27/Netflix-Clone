import { useRef, useState } from "react";
import backgroundImage from "../assets/bg_image.png";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { validateInput } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const dispatch = useDispatch();
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleSignIn = () => {
    if (isLoading) return;
    setIsSignInForm(!isSignInForm);
    setError(null);
  };

  const checkValidation = async () => {
    if (!email.current || !password.current) return;
    const message = validateInput(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    setIsLoading(true);
    try {
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name.current?.value,
        });
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: name.current?.value,
          })
        );
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
        // Signed in
        const user = userCredential.user;
        dispatch(addUser({ email: user.email, displayName: user.displayName }));
      }
    } catch (err) {
      const errorCode = (err as { code?: string }).code;
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorCode + "-" + errorMessage);
    } finally {
      setIsLoading(false);
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
        onSubmit={(e) => {
          e.preventDefault();
          checkValidation();
        }}
        className="w-11/12 max-w-md h-auto max-h-[90vh] overflow-y-auto no-scrollbar absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 sm:p-10 bg-black/80 text-white"
      >
        <h2 className="font-bold text-2xl sm:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            disabled={isLoading}
            className="p-3 sm:p-4 mt-4 bg-zinc-800 text-sm w-full rounded-sm disabled:opacity-60"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email address or Phone number"
          disabled={isLoading}
          className="p-3 sm:p-4 mt-5 sm:mt-6 bg-zinc-800 text-sm w-full rounded-sm disabled:opacity-60"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          disabled={isLoading}
          className="p-3 sm:p-4 mt-5 sm:mt-6 text-sm w-full bg-zinc-800 rounded-sm disabled:opacity-60"
        />

        <p className="text-red-700 font-semibold text-sm mt-1">{error}</p>

        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="bg-red-700 text-white w-full p-3 sm:p-4 mt-5 sm:mt-6 text-sm font-semibold rounded-sm cursor-pointer hover:shadow-lg hover:shadow-black/40 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              {isSignInForm ? "Signing In..." : "Signing Up..."}
            </span>
          ) : isSignInForm ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="text-xs mt-5 sm:mt-6 w-full font-semibold">
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span
            className={`underline ml-1 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
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
