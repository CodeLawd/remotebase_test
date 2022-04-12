import React, { useState } from "react";

function Search({ movieList, setSearchList, setSearchError }) {
  const [searchQuery, setSearchQuery] = useState("");

  // console.log()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery.length > 1) {
      const newSearchList = movieList.filter((movie) => {
        const regex = new RegExp(searchQuery, "ig");
        return movie.name.match(regex);
      });

      newSearchList.length > 0
        ? setSearchList(newSearchList)
        : setSearchError(true);
    } else {
      setSearchError(false);
      setSearchList(null);
    }
  };

  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        data-testid="search"
        value={searchQuery}
        onChange={handleSearch}
      />
    </section>
  );
}

export default Search;
