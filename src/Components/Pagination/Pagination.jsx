import { usePagination, DOTS } from "../../Hooks/usePagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const content = paginationRange?.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return <li className="pagination-item dots">...</li>;
    }

    return (
      <li
        className={`flex items-center border-black border-2 bg-white text-black cursor-pointer rounded px-3
         pagenumber ${pageNumber === currentPage && "active"}`}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  });

  const max = Math.ceil(totalCount / pageSize); // max page
  if (currentPage === 0 || paginationRange.length < 2) return null;
  return (
    <ul className="flex gap-3 justify-center mt-8 mb-10">
      <li
        className="border-black border-2 bg-white text-black cursor-pointer rounded p-1"
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
        className="border-black border-2 bg-white text-black cursor-pointer rounded p-1"
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
