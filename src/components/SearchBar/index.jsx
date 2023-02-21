/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.scss';
import { receiveFilterQueryActionCreator } from '../../states/filters/action';

function SearchBar() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState(filters.filter((filterItem) => filterItem.name === 'name')[0].query);

  const searchQueryHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearQueryHandler = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(receiveFilterQueryActionCreator('name', searchQuery));
    }, 800);
  }, [searchQuery]);

  return (
    <form className="search-form">
      <label htmlFor="search-input" className="search-form__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
        </svg>
      </label>
      <input onInput={searchQueryHandler} id="search-input" value={searchQuery} autoComplete="off" type="text" className="search-form__input" placeholder="Search for a country..." />
      {searchQuery !== '' && (
      <button onClick={clearQueryHandler} type="button" className="search-form__clear">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      </button>
      )}

    </form>
  );
}

export default SearchBar;
