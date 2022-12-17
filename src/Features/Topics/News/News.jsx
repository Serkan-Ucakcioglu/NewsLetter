import Loader from "../../../Components/Loader";
import FinanceList from "../Finance/FinanceList";
import { useGetNewsQuery } from "../topicsSlice";
import Pagination from "../../../Components/Pagination/Pagination";
import usePagiFunction from "../../../Hooks/usePagiFunction";

function News() {
  const { data, isFetching } = useGetNewsQuery();
  const { currentSearchData, currentPage, setCurrentPage } = usePagiFunction(
    data && data
  );

  if (isFetching) return <Loader />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
        {currentSearchData &&
          currentSearchData?.map((topic) => {
            return <FinanceList topic={topic} key={topic?.internalID} />;
          })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data && data?.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default News;
