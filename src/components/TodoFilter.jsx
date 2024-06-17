import { TextField } from "@mui/material";
import React from "react";

export function TodoFilter(props) {
  const { query, setQuery } = props;
  return (
    <TextField
      onChange={(ev) => setQuery(ev.target.value)}
      value={query}
      label="Search..."
      fullWidth="true"
    />
    // <div>
    //   <input
    //     type="search"
    //     value={query}
    //     onChange={(ev) => setQuery(ev.target.value)}
    //   />
    // </div>
  );
}
