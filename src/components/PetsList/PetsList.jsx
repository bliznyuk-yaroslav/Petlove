import { useSelector } from "react-redux";
import css from "./PetsList.module.scss";
import { selectorFullInfoUsers } from "../../redux/auth/selectors";
import PetsItem from "../PetsItem/PetsItem";

export default function PetsList() {
  const userInfo = useSelector(selectorFullInfoUsers);

  return (
    <div>
      <ul className={css.card}>
        {userInfo?.pets?.length > 0 &&
          userInfo.pets.map((item) => (
            <li key={item._id}>
              <PetsItem pets={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}
