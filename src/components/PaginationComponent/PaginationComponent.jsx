import { useDispatch, useSelector } from "react-redux";
import {
  selectorNews,
  selectorPage,
  selectorSearch,
} from "../../redux/news/selectors";
import { useEffect, useState } from "react";
import { fetchNews } from "../../redux/news/operations";
import { setPage, setSearch } from "../../redux/news/slice";
import css from "./PaginationComponent.module.scss";
import { useDebounce } from "../../hooks/useDebounce";
export default function PaginationComponent() {
  const news = useSelector(selectorNews);
  const page = useSelector(selectorPage);

  const search = useSelector(selectorSearch);
  console.log(page);
  console.log(search);
  const dispatch = useDispatch();

  const debounceNextPage = useDebounce(() => dispatch(setPage(page + 1)), 300);
  const debounceLastPage = useDebounce(
    () => dispatch(setPage(news.totalPages)),
    300
  );

  const debouncePrevPage = useDebounce(() => dispatch(setPage(page - 1)), 300);
  const debounceFirstPage = useDebounce(() => dispatch(setPage(1)), 300);
  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);

  const isButtonDisabled = page >= news.totalPages;
  const isFirstButtonDisabled = page === 1;
  const pages = [];
  for (let i = 1; i <= news.totalPages; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={css.contPag}>
        <div
          className={`${css.left} ${isFirstButtonDisabled ? css.disabled : ""}`}
        >
          <div className={css.buttonLeft} onClick={debounceFirstPage}>
            <svg className={css.icon1}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-fi-rr-angle-small-left`}
              ></use>
            </svg>
            <svg className={css.icon2}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-fi-rr-angle-small-left`}
              ></use>
            </svg>
          </div>
          <div className={css.buttonLeft} onClick={debouncePrevPage}>
            <svg className={css.icon3}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-fi-rr-angle-small-left`}
              ></use>
            </svg>
          </div>
        </div>
        <div className={css.contPa}>
          {page > 1 && (
            <div
              className={`${css.numBut} ${page === page - 1 ? css.active : ""}`}
              onClick={() => dispatch(setPage(page - 1))}
            >
              {page - 1}
            </div>
          )}
          <div className={`${css.numBut} ${page === page ? css.active : ""}`}>
            <p>{page}</p>
          </div>
          {page < news.totalPages && (
            <div
              className={`${css.numBut} ${page === page + 1 ? css.active : ""}`}
              onClick={() => dispatch(setPage(page + 1))}
            >
              {page + 1}
            </div>
          )}
        </div>

        <div className={`${css.left} ${isButtonDisabled ? css.disabled : ""}`}>
          <div className={css.buttonRight} onClick={debounceNextPage}>
            <svg className={`${css.icon3}`}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-fi-rr-angle-small-left`}
              ></use>
            </svg>
          </div>
          <div className={css.buttonRight} onClick={debounceLastPage}>
            <svg className={`${css.icon1} `}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-fi-rr-angle-small-left`}
              ></use>
            </svg>
            <svg className={`${css.icon2} `}>
              <use
                xlinkHref={`/icons/sprite.svg#icon-fi-rr-angle-small-left`}
              ></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
