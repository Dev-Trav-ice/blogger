import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
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
              className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
            />
          </div>

          <div className="p-3 bg-gray-300">
            <input
              type="email"
              placeholder="email"
              className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
            />
          </div>

          <div className="p-3 bg-gray-300">
            <input
              type="password"
              placeholder="password"
              className="border-none bg-transparent outline-none w-full placeholder:text-black/50"
            />
          </div>

          <button className="p-3 bg-black text-white text-[16px] rounded-md">
            Sign Up
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
