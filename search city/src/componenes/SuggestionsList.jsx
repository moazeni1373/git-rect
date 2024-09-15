import React from "react";

const SuggestionsList = ({ suggestions, onSuggestionClick }) => {
  return (
    <ul className="suggestions">
      {suggestions.map((city, index) => (
        <li key={index} onClick={() => onSuggestionClick(city)}>
          {city}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;