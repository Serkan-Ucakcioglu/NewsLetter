import { Link } from "react-router-dom";

function Error() {
  return (
    <div id="error-page" className="w-screen mt-8 flex flex-col items-center">
      <h1 className="text-red-700 text-4xl mb-2">Oops!</h1>
      <p className="text-xl  font-semibold mt-2">
        Sorry, an unexpected error has occurred !.
      </p>
      <Link to="/" className="mt-4 underline text-2xl font-extrabold">
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
