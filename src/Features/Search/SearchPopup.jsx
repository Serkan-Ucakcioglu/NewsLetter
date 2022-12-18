import React from "react";
import { Link } from "react-router-dom";

function SearchPopup({ data }) {
  return (
    <div className="absolute bottom-0 top-10 p-3 h-[170px] border-white bg-gray-50 dark:bg-white border w-full rounded">
      <div className="flex flex-col px-3">
        {data?.news?.slice(0, 3)?.map((obj) => {
          return (
            <Link
              key={obj?.id}
              to={`/detail/${obj?.id}`}
              className="mt-2 pl-2 h-8 flex items-center hover:bg-gray-200 hover:text-gray-700 rounded"
            >
              {obj?.title?.substring(0, 15)}...
            </Link>
          );
        })}
      </div>
      {data?.news?.length > 2 && (
        <Link
          to="search-list"
          className="absolute bottom-0 text-m font-bold w-full p-2 text-center"
        >
          Show more...
        </Link>
      )}
    </div>
  );
}

export default SearchPopup;
