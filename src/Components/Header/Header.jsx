import Logo from "./Logo";
import ThemeMode from "./ThemeMode";
import Search from "../../Features/Search/Search";

function Header() {
  return (
    <header className="w-full  bg-white p-2 shadow-sm dark:bg-gray-800">
      <div className="container w-11/12 h-24 flex justify-around px-4 sm:px-10 sm:justify-evenly items-center p-5 m-auto">
        <Logo />
        <Search />
        <ThemeMode />
      </div>
    </header>
  );
}

export default Header;
