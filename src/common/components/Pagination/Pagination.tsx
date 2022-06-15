import { FC } from "react";
import ReactPaginate from "react-paginate";
import { PaginationProps } from "./Pagination.types";

const Pagination: FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
