import React, { useRef } from 'react';

const SearchForm = (props) => {
  const inputEl = useRef('');

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <>
      <div className='form-group' style={{ display: 'flex' }}>
        <label htmlFor='search'></label>
        <input
          ref={inputEl}
          onChange={getSearchTerm}
          value={props.term}
          name='search'
          type='text'
          className='form-control'
          placeholder='Search Employee'
          id='search'
        />
        {/* <button className='btn btn-primary' onClick={toggleSearch}>
          Sort
        </button> */}
      </div>
    </>
  );
};

export default SearchForm;
