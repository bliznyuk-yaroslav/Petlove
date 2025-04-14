import { useEffect, useState } from "react";
import css from "./FriendsItem.module.scss";
import { formatPhoneNumber } from "../../hooks/useFormatPhoneNumber";
export default function FriendsItem({ item }) {
  const [workHours, setWorkHours] = useState("");

  useEffect(() => {
    const today = new Date().getDay();
    const currentDay = item.workDays?.[today];

    if (!item.workDays || item.workDays.length === 0) {
      setWorkHours("Day and night");
    } else if (currentDay?.isOpen) {
      setWorkHours(`${currentDay.from} - ${currentDay.to}`);
    } else {
      setWorkHours("Closed");
    }
  }, [item.workDays]);
  return (
    <div className={css.box}>
      <img src={`${item.imageUrl}`} alt={item.title} className={css.img} />

      <div className={css.boxAdr}>
        <h2 className={css.textHead}>{item.title}</h2>
        <div className={css.boxText}>
          <p className={css.text}>
            {item.email ? (
              <>
                Email:{" "}
                <a href={`mailto:${item.email}`} className={css.primTex}>
                  {item.email}
                </a>
              </>
            ) : item.phone ? (
              <>
                Email: <span className={css.primTex}>phone only</span>
              </>
            ) : (
              <>
                Email:{" "}
                <span className={css.primTex}>Visit us at the address</span>
              </>
            )}
          </p>
          <p className={css.text}>
            {item.address ? (
              <>
                Address:
                <a
                  href={item.addressUrl}
                  className={css.primTex}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.address}
                </a>
              </>
            ) : (
              <>
                Address:<span className={css.primTex}>website only</span>
              </>
            )}
          </p>
          <p className={css.text}>
            {item.phone ? (
              <>
                Phone:
                <a href={`tel:${item.phone}`} className={css.primTex}>
                  {formatPhoneNumber(item.phone)}
                </a>
              </>
            ) : (
              <>
                Phone:<span className={css.primTex}>email only</span>
              </>
            )}
          </p>
        </div>
      </div>

      <p className={css.dataBox}>{workHours}</p>
    </div>
  );
}
