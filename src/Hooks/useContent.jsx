import React from "react";
import usePagiFunction from "./usePagiFunction";
import Pagination from "../Components/Pagination/Pagination";
import FinanceList from "../Features/Topics/Finance/FinanceList";

function useContent(data) {
  const { currentSearchData, currentPage, setCurrentPage } = usePagiFunction(
    data && data
  );

  //Instead of mapping the component one by one, returning the component,
  // by dipping it once and preventing the duplication of the code.
  const content = (
    <div className="flex flex-col dark:bg-gray-800 dark:h-screen">
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-3">
        {currentSearchData &&
          currentSearchData?.map((topic) => {
            return (
              <FinanceList topic={topic} key={topic?.internalID || topic?.id} />
            );
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
