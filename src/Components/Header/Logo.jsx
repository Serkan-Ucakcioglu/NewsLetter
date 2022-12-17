import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="mr-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
        alt="logo"
        className="rounded w-[100px] h-10 sm:w-10 sm:h-10 dark:bg-white p-1"
        loading="lazy"
      />
    </Link>
  );
}

export default Logo;
