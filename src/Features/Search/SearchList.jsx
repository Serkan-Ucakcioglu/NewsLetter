import { useGetSearchsQuery } from "./searchSlice";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { useSelector } from "react-redux";
import { selectedDebounce } from "../searchSlices";
import SearchExperct from "./SearchExperct";

function SearchList() {
  const debounce = useSelector(selectedDebounce);
  const { data, isError, isFetching } = useGetSearchsQuery(
    debounce !== undefined && debounce !== "" && debounce
  );

  if (isFetching) return <Loader />;
  if (isError) return <Error />;
  return (
    <div className="w-full flex justify-center pt-4 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto gap-2">
        {data?.news?.map((obj) => (
          <SearchExperct obj={obj} key={obj?.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchList;
