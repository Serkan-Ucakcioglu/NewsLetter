import React from "react";
import usePagiFunction from "./usePagiFunction";
import Pagination from "../Components/Pagination/Pagination";
import FinanceList from "../Features/Topics/Finance/FinanceList";

function useContent(data) {
  const { currentSearchData, currentPage, setCurrentPage } = usePagiFunction(
    data && data
  );
  const content = (
    <div className="flex flex-col dark:bg-gray-800">
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

  return content;
}

export default useContent;
