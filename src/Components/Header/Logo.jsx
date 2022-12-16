import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
        alt="logo"
        className="rounded"
        loading="lazy"
        width={50}
        height={100}
      />
    </Link>
  );
}

export default Logo;
