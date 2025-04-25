import EditUserBtn from "../EditUserBtn/EditUserBtn";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import PetsBlock from "../PetsBlock/PetsBlock";
import UserBlock from "../UserBlock/UserBlock";
import css from "./UserCard.module.scss";
export default function UserCard() {
  return (
    <section className={css.cardBox}>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn style={css.btn} />
    </section>
  );
}
