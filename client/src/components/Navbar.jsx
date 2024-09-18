import React from "react";
import { GiQuill } from "react-icons/gi";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-md p-4">
      <div className="flexBetween max-container">
        <Link to="/">
          <GiQuill size={35} />
        </Link>

        <div className="flex gap-4">
          <Link to="/sign-in" className="btn bg-black   text-white">
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="hidden md:block btn bg-transparent border border-black text-black  "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
