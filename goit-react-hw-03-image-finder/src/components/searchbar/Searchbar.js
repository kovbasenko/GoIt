import React from "react";

function Searchbar({ change, search, value }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={search}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={change}
          value={value}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
