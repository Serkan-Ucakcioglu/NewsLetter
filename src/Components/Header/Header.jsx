import Logo from "./Logo";
import Search from "../../Features/Search/Search";

function Header() {
  return (
    <header className="w-full bg-white p-2 shadow-sm dark:bg-gray-800">
      <div className="container w-11/12 h-24 flex px-10 justify-center  items-center p-5 m-auto">
        <Logo />
        <Search />
      </div>
    </header>
  );
}

export default Header;
