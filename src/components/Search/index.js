/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useCallback, useRef, useState } from "react";
import Link from "next/link";

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const searchRef = useRef(null);
  const inputElemennt = useRef();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  const onClean = useCallback(() => {
    setResults([]);
    setIsSearch(!isSearch);
    setActive(false);
    setQuery("");
  });

  return (
    <Fragment>
      <form className="search-form" action="/search" method="GET">
        <div className="search-box">
          <input
            ref={inputElemennt}
            className={isSearch ? "search-input show" : "search-input"}
            onChange={onChange}
            onFocus={onFocus}
            value={query}
            type="text"
            name="q"
            placeholder="Nhập từ khóa và lấy búa đập phím Enter"
            autoComplete="off"
          />
          {active && results.length > 0 && (
            <ul className={isSearch ? "list-search show" : "list-search"}>
              {results.map(({ slug, title }) => (
                <li className="item-result-search" key={slug}>
                  <Link href="/[slug]" as={`/${slug}`}>
                    <a onClick={onClean}>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      <span
        className={isSearch ? "nav-search-close show" : "nav-search-close"}
        onClick={onClean}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </span>
      <span
        className={isSearch ? "nav-search-btn" : "nav-search-btn show"}
        onClick={() => {
          setIsSearch(!isSearch);
          setActive(true);
          inputElemennt.current.focus();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </span>
    </Fragment>
  );
};

export default Search;
