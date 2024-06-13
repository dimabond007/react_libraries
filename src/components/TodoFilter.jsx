import React from "react";

export function TodoFilter(props) {
  const { query, setQuery } = props;
  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(ev) => setQuery(ev.target.value)}
      />
    </div>
  );
}
