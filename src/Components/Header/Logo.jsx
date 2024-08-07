import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="mr-10">
      <img
        src="https://t3.ftcdn.net/jpg/00/88/43/58/360_F_88435823_c3MiOAvV8gFwtQzTGlsLt6I6mFvQuQmN.jpg"
        alt="logo"
        className="rounded  sm:w-10 sm:h-10 dark:bg-white"
        loading="lazy"
      />
    </Link>
  );
}

export default Logo;
