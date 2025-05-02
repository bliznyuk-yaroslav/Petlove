import { Link } from "react-router-dom";

import css from "./NotFound.module.scss";
import cat from "../../images/07863234c0633ec8822b21aaaf0de963.png";

export default function NotFoundPage() {
  return (
    <section className={css.container}>
      <div className={css.boxError}>
        <p className={css.textError}>
          4{" "}
          <span className={css.imgFon}>
            <span className={css.imgError}></span>
            {/* <img src={cat} alt="catEror" className={css.imgError} /> */}
          </span>
          4
        </p>
        <div className={css.textBox}>
          <p className={css.oops}>Ooops! This page not found :(</p>
          <Link to={"/"} className={css.btn}>
            To home page
          </Link>
        </div>
      </div>
    </section>
  );
}
