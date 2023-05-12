import React, { useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:8080/api/users/login",
        { email, password },
        config
      );
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 bg-[#f7f9fc]">
      <div className="max-w-sm w-full text-gray-600 bg-white p-10 rounded-md">
        <h1 className="text-center sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          <button>
            <Link to="/">GymGenie</Link>
          </button>
        </h1>
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Sign in
            </h3>
            <p className="">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <form className="mt-8 space-y-5" onSubmit={submitHandler}>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-solid border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-solid border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign In
          </button>
          <p className="text-center">
            <button>
              <Link to="/forgotpass">
                <span className="hover:underline">Forgot password?</span>
              </Link>
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
