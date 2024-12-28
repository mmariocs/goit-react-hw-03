import React from "react";
import s from "./SearchBox.module.css";
const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          onChange={(e) => onFilterChange(e.target.value)}
          value={filter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
