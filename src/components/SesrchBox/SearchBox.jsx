import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        value={value}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
