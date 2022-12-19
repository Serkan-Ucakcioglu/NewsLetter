import React from "react";
import { Link } from "react-router-dom";

function SearchPopup({ data }) {
  return (
    <div className="h-[200px] overflow-auto absolute bottom-0 top-10 p-3 sm:h-[170px] border-white bg-gray-50 dark:bg-white border w-full rounded">
      <div className="mb-2 sm:flex  flex-col justify-center px-3 overflow-auto">
        {data?.slice(0, 3)?.map((obj) => {
          return (
            <Link
              key={obj?.id}
              to={`/detail/${obj?.id}`}
              className="mb-3 pt-2 sm:pl-2 sm:h-8 flex items-center hover:bg-gray-200 hover:text-gray-700 rounded"
            >
              {obj?.title?.substring(0, 15)}...
            </Link>
          );
        })}
        {data?.length > 2 && (
          <Link
            to="search-list"
            className="sm:absolute flex flex-row justify-center  bottom-0 text-m font-bold w-full p-2 text-center"
          >
            Show more
          </Link>
        )}
      </div>
    </div>
  );
}

export default SearchPopup;
