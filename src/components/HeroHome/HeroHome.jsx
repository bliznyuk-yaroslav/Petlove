import Navigate from "../Navigate/Navigate";
import css from "./HeroHome.module.scss";
function HeroHome() {
  return (
    <>
      <div className={css.container}>
        <Navigate />
        <div className={css.contText}>
          <h1 className={css.heroH}>
            Take good <span className={css.heroCare}>care</span> of your small
            pets
          </h1>
          <p className={css.text}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div>
        <div className={css.background_image}></div>
      </div>
    </>
  );
}

export default HeroHome;
