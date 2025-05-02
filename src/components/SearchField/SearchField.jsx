export default function SearchField({
  value,
  onChange,
  onSubmit,
  placeholder,
  styles,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  const handleClear = (e) => {
    onChange({ target: { value: "" } });
    onSubmit("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <button type="submit" className={styles.iconSearch}>
        <svg className={styles.icon}>
          <use xlinkHref={`/icons/sprite.svg#icon-search`}></use>
        </svg>
      </button>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.inputSearch}
      />
      {value && (
        <button type="submit" className={styles.btnClear} onClick={handleClear}>
          <svg className={styles.iconClear}>
            <use xlinkHref={`/icons/sprite.svg#icon-x`}></use>
          </svg>
        </button>
      )}
    </form>
  );
}
