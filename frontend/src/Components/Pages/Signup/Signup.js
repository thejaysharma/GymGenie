import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm Password is not same!");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "http://localhost:8080/api/users",
          { firstName, lastName, email, password },
          config
        );

        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 bg-[#f7f9fc]">
      <div className="max-w-sm w-full text-gray-600 bg-white p-10 rounded-md">
        <h1 className="text-center sm:text-4xl text-2xl font-bold ml-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          GymGenie
        </h1>
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Sign up for an account
            </h3>
            <p className="">
              Have an account already?{" "}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
        <form className="mt-8 space-y-5" onSubmit={submitHandler}>
          <div>
            <label className="font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              required=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-solid border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              required=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-solid border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
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
          <div>
            <label className="font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              required=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent border-solid border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Sign Up
          </button>
        </form>
        <p>
          Not signed in - by signing up you agree to our{" "}
          <span className="underline">
            <a href="https://www.privacyboard.co/company/gymgenie">
              privacy policy
            </a>
          </span>
        </p>
      </div>
    </main>
  );
}
