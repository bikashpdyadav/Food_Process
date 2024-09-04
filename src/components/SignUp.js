import Header from "./Header";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSignup}
        className="absolute p-8 mx-auto left-0 right-0 top-1/2 transform -translate-y-1/2 rounded-lg text-black flex flex-col w-11/12 sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4"
      >
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl p-6">
            Sign Up
          </h1>
        </div>
        <label className="font-bold text-lg">Full Name</label>
        <input
          ref={name}
          type="text"
          className="mb-4 p-2 w-full bg-gray-500 bg-opacity-30 rounded-lg"
        />
        <label className="font-bold text-lg">Email Address</label>
        <input
          ref={email}
          type="email"
          className="mb-4 p-2 w-full bg-gray-500 bg-opacity-30 rounded-lg"
          required
        />
        <label className="font-bold text-lg">Password</label>
        <input
          ref={password}
          type="password"
          className="mb-4 p-2 w-full bg-gray-500 bg-opacity-30 rounded-lg"
          required
        />
        <button
          type="submit"
          className="my-4 p-2 w-full bg-[#e2b808] rounded-lg font-semibold hover:bg-[#d1a507] transition-colors"
        >
          Sign up now
        </button>
        <p
          className="my-4 cursor-pointer font-bold text-base text-center"
          onClick={() => navigate("/login")}
        >
          Already Registered? Sign In Now
        </p>
      </form>
    </div>
  );
};

export default Signup;
