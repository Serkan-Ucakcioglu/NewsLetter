import SearchSvg from "../../Svg/SearchSvg";
import useDebounce from "../../Hooks/useDebounce";
import { useGetSearchsQuery } from "./searchSlice";
import SearchPopup from "./SearchPopup";
import useSearch from "../../Hooks/useSearch";
import { useLocation } from "react-router-dom";
import Close from "../../Svg/Close";

function Search() {
  const { value, handleChange, setValue } = useSearch();
  const debounce = useDebounce(value?.length > 2 && value);
  const { data } = useGetSearchsQuery(
    debounce !== undefined && debounce !== "" && debounce
  );
  const location = useLocation();

  return (
    <div className="relative w-[700px] h-5 flex items-center">
      <input
        type="text"
        {...handleChange}
        placeholder="Search News"
        className="border-gray-500 relative border-2 h-11 rounded w-full pl-10 outline-none shadow dark:border-white"
      />
      {debounce && location?.pathname !== "/search-list" && (
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
