import React from "react";
import { Link } from "react-router-dom";
import ReadMore from "../../Svg/ReadMore";

function SearchExperct({ obj }) {
  return (
    <div className="flex flex-col w-[384px] mt-2 p-6 bg-white border border-gray-200 dark:border-gray-100 dark:border-1 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {obj?.title}
      </span>
      <Link
        to={`/detail/${obj?.id}`}
        className="inline-flex  flex-row w-[125px] mt-auto mb-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Go To Details
        <ReadMore />
      </Link>
    </div>
  );
}

export default SearchExperct;
