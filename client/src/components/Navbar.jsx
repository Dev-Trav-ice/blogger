import React from "react";
import { GiQuill } from "react-icons/gi";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-md p-4">
      <div className="flexBetween max-container">
        <GiQuill size={35} />

        <div className="flex gap-4">
          <Link
            to="/sign-in"
            className="btn bg-black hover:bg-transparent hover:border hover:border-black hover:text-black text-white"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="hidden md:block btn bg-transparent border border-black text-black hover:bg-black hover:text-white "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
