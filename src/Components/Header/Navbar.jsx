import { Link } from "react-router-dom";

function Navbar() {
  return (
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
  );
}

export default Navbar;
