import { Link } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
  return (
    <header className="w-full bg-gray-50 shadow-sm">
      <div className="container w-11/12 h-24 flex px-10 justify-center items-center p-5 m-auto bg-gray-50">
        <div className="logo mr-auto">
          <Logo />
        </div>
        <Search />
        <div className="ml-auto flex gap-5">
          <Link to="/" className="underline text-xl font-bold">
            About
          </Link>
          <Link to="/" className="underline text-xl font-bold">
            News
          </Link>
          <Link to="/" className="underline text-xl font-bold">
            se
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
