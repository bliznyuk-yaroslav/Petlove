import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={css.container}>
      <div className={css.center}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={css.wave}></div>
        ))}
      </div>
    </div>
  );
}
