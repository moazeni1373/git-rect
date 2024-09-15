import React from "react";

const SearchInput = ({ query, onInputChange }) => {
  const handleChange = (e) => {
    onInputChange(e.target.value);  
  };

  return (
    <input
      type="text"
      placeholder="Enter the name of the city..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchInput;