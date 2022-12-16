import React from "react";
import Loader from "../../../Components/Loader";
import Pagination from "../../../Components/Pagination/Pagination";
import usePagi from "../../../Hooks/usePagi";
import FinanceList from "../Finance/FinanceList";
import { useGetRegionQuery } from "../topicsSlice";

function Region() {
  const { data, isFetching } = useGetRegionQuery();
  const datas = data && data?.modules?.map((obj) => obj.stories).flat();
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

export default Region;
