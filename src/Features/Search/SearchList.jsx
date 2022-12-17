import { Link } from "react-router-dom";
import { useGetSearchsQuery } from "./searchSlice";
import useDebounce from "../../Hooks/useDebounce";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

function SearchList() {
  const debounce = useDebounce();
  const { data, isError, isFetching } = useGetSearchsQuery(
    debounce && debounce
  );

  if (isFetching) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto gap-2">
        {data?.news?.map((obj) => {
          return (
            <div className="flex flex-col w-[384px] mt-2 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {obj?.title}
              </span>
              <Link
                to={`/detail/${obj?.id}`}
                className="font-normal text-gray-700 dark:text-gray-400"
              >
                Go To Detail
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchList;
