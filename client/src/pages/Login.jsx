import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = axios.post("/api/auth/sign-in", values).then((data) => {
        dispatch(signInSuccess(data));
        navigate("/");
        toast.success("login successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        setLoading(false);
      });
      console.log(res);
    } catch (error) {
      setLoading(false);
      dispatch(signInFailure(error));
      setErr(error.response.data.message);
      toast.error(err, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
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
            {loading ? "Loading..." : "Sign in"}
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
