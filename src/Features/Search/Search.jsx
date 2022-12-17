import SearchSvg from "../../Svg/SearchSvg";
import useDebounce from "../../Hooks/useDebounce";
import { useGetSearchsQuery } from "./searchSlice";
import SearchPopup from "./SearchPopup";
import useSearch from "../../Hooks/useSearch";

function Search() {
  const { value, handleChange } = useSearch();
  const debounce = useDebounce(value?.length > 2 && value);
  const { data } = useGetSearchsQuery(debounce && debounce);

  return (
    <div className="relative w-[700px] h-5 flex items-center">
      <input
        type="text"
        {...handleChange}
        placeholder="Search News"
        className="border-gray-500 focus:border-black relative border-2 h-11 rounded w-full pl-10 outline-none shadow"
      />
      {debounce && location?.pathname !== "/search-list" && (
        <SearchPopup data={data} />
      )}
      <div className="absolute left-0 top-0 ml-2 cursor-pointer">
        <SearchSvg />
      </div>
    </div>
  );
}

export default Search;
