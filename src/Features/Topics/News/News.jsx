import { useMemo } from "react";
import { useState } from "react";
import Loader from "../../../Components/Loader";
import FinanceList from "../Finance/FinanceList";
import { useGetMarketsQuery } from "../topicsSlice";
import Pagination from "../../../Components/Pagination/Pagination";

let PageSize = 5;
function News() {
  const { data, isFetching } = useGetMarketsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const datas = data?.map((obj) => obj?.stories).flat(); //get stories array

  const currentSearchData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return datas?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  if (isFetching)
    return (
      <div className="flex justify-center items-center mt-6">
        <Loader />
      </div>
    );
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
        totalCount={datas.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default News;
