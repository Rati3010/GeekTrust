import React, { useEffect, useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const searchAccordingQuery = () => {
      console.log(query);
    }
    const timer = setTimeout(() => {
      if (query) {
        searchAccordingQuery();
      }
    }, 1500);
    return () => clearTimeout(timer)
  }, [query]);
  return (
    <div>
      <input placeholder='Search by name, email or role' value={query} onChange={(event) => setQuery(event.target.value)} />
    </div>
  )
}

export default Search