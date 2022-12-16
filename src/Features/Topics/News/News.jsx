import Loader from "../../../Components/Loader";
import FinanceList from "../Finance/FinanceList";
import { useGetNewsQuery } from "../topicsSlice";
import Pagination from "../../../Components/Pagination/Pagination";
import usePagi from "../../../Hooks/usePagi";

function News() {
  const { data, isFetching } = useGetNewsQuery();
  const datas = data?.map((obj) => obj?.stories).flat(); //get stories arrays
  const { currentSearchData, currentPage, setCurrentPage } = usePagi(
    datas && datas
  );

  if (isLoading) return <Loader />;
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
        totalCount={datas && datas?.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default News;
