import React, { useState, useEffect } from "react";
import SearchInput from "../componenes/SearchInput";
import SuggestionsList from "../Componenes/SuggestionsList";
import cities from "../data/cities";
import style from "../home/HomePage.module.css"

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]); 
  
  useEffect(() => {
    if (query.trim()) {
      const filteredCities = cities.filter((city) => city.startsWith(query));
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  
  const handleSuggestionClick = (city) => {
    setQuery(city);
    setSuggestions([]); 
  };

  return (
    <div className="container">
      <h1>Search city</h1>
      <SearchInput query={query} onInputChange={setQuery} />
      <SuggestionsList suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
    </div>
  );
};

export default App;