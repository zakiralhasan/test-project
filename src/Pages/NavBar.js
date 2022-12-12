import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className=" w-full flex justify-center gap-5 mt-5">
          <Link
            to="/"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 "
          >
            PageOne
          </Link>
          <Link
            to="/page-two"
            className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 "
          >
            PageTwo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
