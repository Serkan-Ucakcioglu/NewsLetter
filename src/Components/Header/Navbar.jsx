import { Link } from "react-router-dom";

function Navbar() {
  const arr = [
    { name: "About", path: "/" },
    { name: "News", path: "/" },
    { name: "Se", path: "/" },
  ];

  return (
    <div className="flex gap-5">
      {arr?.map((route) => {
        return (
          <Link to={route.path} className="underline text-xl font-bold">
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
