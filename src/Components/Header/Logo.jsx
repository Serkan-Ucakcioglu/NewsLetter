import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
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
