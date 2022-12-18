import React from "react";
import TopicList from "./FinanceList";
import { useGetTopicQuery } from "../topicsSlice";
import Loader from "../../../Svg/Loader";
import usePagiFunction from "../../../Hooks/usePagiFunction";
import Pagination from "../../../Components/Pagination/Pagination";

function Finance() {
  const { data, isFetching } = useGetTopicQuery();
  const { currentSearchData, currentPage, setCurrentPage } = usePagiFunction(
    data && data
  );

  if (isFetching) return <Loader />;
  return (
    <div className="w-full flex flex-col items-center pt-4 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
        {currentSearchData &&
          currentSearchData?.map((topic) => (
            <TopicList topic={topic} key={topic?.internalID} />
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

export default Finance;
