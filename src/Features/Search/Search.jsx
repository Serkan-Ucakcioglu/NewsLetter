import SearchSvg from "../../Svg/Search.svg";

function Search() {
  return (
    <div className="relative w-[700px] h-5 flex items-center">
      <input
        type="text"
        placeholder="Search News"
        className="border-gray-500 focus:border-black relative border-2 h-11 rounded w-full pl-10 outline-none shadow"
      />
      <img
        src={SearchSvg}
        alt="search"
        className="absolute left-0 top-0 ml-2 cursor-pointer"
      />
    </div>
  );
}

export default Search;
