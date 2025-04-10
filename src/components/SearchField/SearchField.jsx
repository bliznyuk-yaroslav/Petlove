export default function SearchField({ value, onChange, placeholder, styles }) {
  return (
    <div className={styles.inputSearch}>
      <svg className={styles.iconSearch}>
        <use xlinkHref={`/icons/sprite.svg#icon-search`}></use>
      </svg>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.search}
      />
    </div>
  );
}
