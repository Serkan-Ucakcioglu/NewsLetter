import SearchSvg from "../../Svg/Search.svg";

function Search() {
  return (
    <div className="relative h-5 flex items-center">
      <input
        type="text"
        placeholder="Search News"
        className="border relative border-r-0 border-2 h-12 rounded w-[600px] pl-10 outline-none shadow"
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
