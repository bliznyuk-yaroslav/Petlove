import { SpinnerCircular } from "spinners-react";
import css from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={css.container}>
      <SpinnerCircular
        size={396}
        thickness={20}
        speed={97}
        color="rgba(246, 184, 61, 1)"
        secondaryColor="rgba(0, 0, 0, 0.2)"
      />
    </div>
  );
}
