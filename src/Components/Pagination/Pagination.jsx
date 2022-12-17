import usePagiFunction from "../../Hooks/usePagiFunction";
import { usePagination, DOTS } from "../../Hooks/usePagination";
const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage } = props;
  const { PageSize } = usePagiFunction();
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    PageSize,
  });

  const content = paginationRange?.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return <li className="pagination-item dots">...</li>;
    }

    return (
      <li
        className={`flex items-center border-gray-400 border bg-white text-black cursor-pointer rounded px-3 ml-2
         pagenumber ${pageNumber === currentPage && "active border-white"}`}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  });

  const max = Math.ceil(totalCount / PageSize); // max page
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2))
    return null;
  return (
    <ul className="flex gap-3 justify-center mt-8 mb-10">
      <li
        className="border-gray-400 border bg-white text-black cursor-pointer rounded p-1"
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        Previous
      </li>
      {content}
      <li
        className="border-gray-400 border ml-2 bg-white text-black cursor-pointer rounded p-1"
        onClick={() => {
          if (currentPage < max) {
            onPageChange(currentPage + 1);
          }
        }}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
