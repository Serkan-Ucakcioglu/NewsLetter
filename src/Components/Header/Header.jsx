import Logo from "./Logo";
import Search from "../../Features/Search/Search";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full bg-white p-2 shadow-sm">
      <div className="container w-11/12 h-24 flex px-10 justify-around  items-center p-5 m-auto">
        <Logo />
        <Search />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
