import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const res = axios.post("/api/auth/sign-in", values);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="flexCenter flex-col h-[calc(100vh-70px)]">
        <h1 className="bold-32 text-center font-serif">Sign In</h1>
        <p className="text-center font-serif medium-18 m-4">
          Please sign in to your account to continue
        </p>
        <form className="flex flex-col gap-5 w-[270px]">
          <div className="p-3 bg-gray-300">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
              className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
            />
          </div>

          <div className="p-3 bg-gray-300">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
              className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="p-3 bg-black text-white text-[16px] rounded-md"
          >
            Sign In
          </button>
          <p className=" medium-18 font-serif">
            Don't have an account?{" "}
            <Link className="underline" to="/sign-up">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
