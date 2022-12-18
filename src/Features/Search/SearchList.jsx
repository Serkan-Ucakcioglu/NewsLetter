import { useGetSearchsQuery } from "./searchSlice";
import Error from "../../Components/Error";
import { useSelector } from "react-redux";
import { selectedDebounce } from "../searchSlices";
import SearchExperct from "./SearchExperct";
import usePagiFunction from "../../Hooks/usePagiFunction";
import Pagination from "../../Components/Pagination/Pagination";
import Loader from "../../Svg/Loader";

function SearchList() {
  const debounce = useSelector(selectedDebounce);
  const { data, isError, isFetching } = useGetSearchsQuery(
    debounce && debounce
  );
  const { currentSearchData, currentPage, setCurrentPage } = usePagiFunction(
    data && data
  );

  if (isFetching) return <Loader />;
  if (isError) return <Error />;
  return (
    <div className="w-full flex flex-col items-center pt-4 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto gap-2">
        {currentSearchData &&
          currentSearchData?.map((obj) => (
            <SearchExperct obj={obj} key={obj?.id} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data && data?.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default SearchList;
