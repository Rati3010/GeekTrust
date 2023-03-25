import { getMembers, searchQuery } from "../Redux/action";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query.length === 0) {
      dispatch(getMembers());
    } else {
      dispatch(searchQuery(query));
    }
  }, [query]);
  return (
    <div>
      <input
        placeholder="Search by name, email or role"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default Search;
