import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInStart());

    setLoading(true);
    const res = axios
      .post("/api/auth/sign-up", values)
      .then((data) => {
        dispatch(signInSuccess(data));
        navigate("/");
        toast.success("User created successfully", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        setLoading(false);
      })
      .catch((error) => {
        dispatch(signInFailure(error));
        setErr(error.response.data.message);
        toast.error(err, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        setLoading(false);
      });
  };
  return (
    <div>
      <Navbar />

      <div className="flexCenter flex-col h-[calc(100vh-70px)]">
        <h1 className="bold-32 text-center font-serif">Sign Up</h1>
        <p className="text-center font-serif medium-18 m-4">
          Please create an account to continue
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
              type="email"
              placeholder="email"
              name="email"
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
            className="p-3 bg-black text-white text-[16px] rounded-md"
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <p className=" medium-18 font-serif">
            Already have an account?{" "}
            <Link className="underline" to="/sign-in">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
