import React from "react";
import { Link } from "react-router-dom";
import SearchingList from "./SearchingList";

function SearchPopup({ data }) {
  return (
    <div className="h-[200px] overflow-auto absolute bottom-0 top-10 p-3 sm:h-[170px] border-white bg-gray-50 dark:bg-white border w-full rounded">
      <div className="mb-2 sm:flex  flex-col justify-center px-3 overflow-auto">
        {data?.slice(0, 3)?.map((obj) => {
          return <SearchingList key={obj?.id} obj={obj} />;
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
