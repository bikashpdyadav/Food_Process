import { useRef } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignin = async (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSignin}
        className="absolute p-8 mx-auto left-0 right-0 top-1/2 transform -translate-y-1/2 rounded-lg text-black flex flex-col w-11/12 sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4"
      >
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl p-6">
            Sign In
          </h1>
        </div>
        <label className="font-bold text-lg">Email Address</label>
        <input
          ref={emailRef}
          type="email"
          className="mb-4 p-2 w-full bg-gray-500 bg-opacity-30 rounded-lg"
          required
        />
        <label className="font-bold text-lg">Password</label>
        <input
          ref={passwordRef}
          type="password"
          className="mb-4 p-2 w-full bg-gray-500 bg-opacity-30 rounded-lg"
          required
        />
        <button
          type="submit"
          className="my-4 p-2 w-full bg-[#e2b808] rounded-lg font-semibold hover:bg-[#d1a507] transition-colors"
        >
          Sign in now
        </button>
        <p
          className="my-4 cursor-pointer font-bold text-lg text-center"
          onClick={() => navigate("/signup")}
        >
          Not Registered? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
