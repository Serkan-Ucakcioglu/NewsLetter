import React from "react";
import { Link } from "react-router-dom";

function SearchingList({ obj }) {
  return (
    <Link
      to={`/detail/${obj?.id}`}
      className="mb-3 pt-2 sm:pl-2 sm:h-8 flex items-center hover:bg-gray-200 hover:text-gray-700 rounded"
    >
      {obj?.title?.substring(0, 15)}...
    </Link>
  );
}

export default SearchingList;
