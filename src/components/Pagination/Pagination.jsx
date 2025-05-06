import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { setPage } from "../../redux/news/slice";
import css from "./Pagination.module.scss";
import { useDebounce } from "../../hooks/useDebounce";
export default function Pagination({ item, page, onPageChange }) {
  const handlePageClick = (event) => {
    onPageChange(event.selected + 1);
  };

  const debounceNextPage = useDebounce(() => onPageChange(page + 1), 300);
  const debounceLastPage = useDebounce(
    () => onPageChange(item.totalPages),
    300
  );

  const debouncePrevPage = useDebounce(() => onPageChange(page - 1), 300);
  const debounceFirstPage = useDebounce(() => onPageChange(1), 300);

  return (
    <div className={css.contPag}>
      <div className={`${css.left} ${page === 1 ? css.disabled : ""}`}>
        <div className={css.buttonLeft} onClick={debounceFirstPage}>
          <svg className={css.icon1}>
            <use xlinkHref="/icons/sprite.svg#icon-fi-rr-angle-small-left" />
          </svg>
          <svg className={css.icon2}>
            <use xlinkHref="/icons/sprite.svg#icon-fi-rr-angle-small-left" />
          </svg>
        </div>
        <div className={css.buttonLeft} onClick={debouncePrevPage}>
          <svg className={css.icon3}>
            <use xlinkHref="/icons/sprite.svg#icon-fi-rr-angle-small-left" />
          </svg>
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        pageCount={item.totalPages || 0}
        forcePage={page - 1}
        containerClassName={css.pagination}
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        breakClassName={css.pageItem}
        breakLinkClassName={css.pageLink}
        activeClassName={css.active}
      />

      <div
        className={`${css.left} ${
          page === item.totalPages ? css.disabled : ""
        }`}
      >
        <div className={css.buttonRight} onClick={debounceNextPage}>
          <svg className={css.icon3}>
            <use xlinkHref="/icons/sprite.svg#icon-fi-rr-angle-small-left" />
          </svg>
        </div>
        <div className={css.buttonRight} onClick={debounceLastPage}>
          <svg className={css.icon1}>
            <use xlinkHref="/icons/sprite.svg#icon-fi-rr-angle-small-left" />
          </svg>
          <svg className={css.icon2}>
            <use xlinkHref="/icons/sprite.svg#icon-fi-rr-angle-small-left" />
          </svg>
        </div>
      </div>
    </div>
  );
}
