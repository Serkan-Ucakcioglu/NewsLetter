import { useState } from "react";
import SearchSvg from "../../Svg/SearchSvg";
import useDebounce from "../../Hooks/useDebounce";
import { useGetSearchsQuery } from "./searchSlice";
import SearchPopup from "./SearchPopup";
import useSearch from "../../Hooks/useSearch";
import Close from "../../Svg/Close";

function Search() {
  const [focus, setFocus] = useState(false);
  const { value, handleChange, setValue } = useSearch();
  const debounce = useDebounce(value?.length > 2 ? value : "");
  const { data } = useGetSearchsQuery(debounce && debounce);

  return (
    <div
      className="relative sm:w-[700px] h-5 flex items-center"
      onFocus={() => setFocus(true)}
      onBlur={() =>
        setTimeout(() => {
          setFocus(false);
        }, 200)
      }
    >
      <input
        type="text"
        {...handleChange}
        placeholder="Search News"
        className={`border-gray-500 relative border-2 h-11 rounded w-full pl-10 outline-none shadow dark:border-white ${
          focus && debounce?.length > 2 && !data?.length
            ? "border-red-500 border-2 dark:border-red-500 dark:border-2"
            : ""
        }]`}
      />
      {debounce?.length > 2 && focus && !!data?.length && (
        <SearchPopup data={data} key={Date.now()} />
      )}
      <div className="absolute left-0 top-0 ml-2 cursor-pointer">
        <SearchSvg />
      </div>
      {value?.length > 2 && (
        <div
          className="absolute flex items-center h-5 right-0 top-0 ml-2 cursor-pointer"
          onClick={() => setValue("")}
        >
          <Close />
        </div>
      )}
    </div>
  );
}

export default Search;
