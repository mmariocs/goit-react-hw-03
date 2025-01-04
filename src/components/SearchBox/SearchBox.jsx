import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ handleSearchInput }) => {
  const id = { useId };
  return (
    <div className={s.searchContainer}>
      <lable htmlFor={id}>Find contacts by name</lable>
      <input
        id={id}
        type="text"
        name="searchName"
        onChange={handleSearchInput}
      ></input>
    </div>
  );
};

export default SearchBox;
