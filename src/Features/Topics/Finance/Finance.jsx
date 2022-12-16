import React from "react";
import TopicList from "./FinanceList";
import { useGetTopicQuery } from "../topicsSlice";
import Loader from "../../../Components/Loader";
import usePagi from "../../../Hooks/usePagi";
import Pagination from "../../../Components/Pagination/Pagination";

function Finance() {
  const { data, isLoading } = useGetTopicQuery();
  const datas = data?.stories.map((news) => news).flat();
  const { currentSearchData, currentPage, setCurrentPage } = usePagi(
    datas && datas
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="w-full flex justify-center mt-4">
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
          {currentSearchData &&
            currentSearchData?.map((topic) => (
              <TopicList topic={topic} key={topic?.internalID} />
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={datas && datas?.length}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Finance;
