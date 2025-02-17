// import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input form-control" onChange={inputHandler} type="text" />
      <button onClick={search} className="btn  btn-primary">Search</button>
    </div>
  );
};

export default Search;
