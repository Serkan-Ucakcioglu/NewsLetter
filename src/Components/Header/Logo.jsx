import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="mr-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mB1pyuU6HAxkxPSXsdiuSzknXuNPtNIG4Q&usqp=CAU"
        alt="logo"
        className="rounded  h-10 sm:w-10 sm:h-10 dark:bg-white p-1"
        loading="lazy"
      />
    </Link>
  );
}

export default Logo;
