import { useSelector } from "react-redux";
import css from "./CardNews.module.scss";
import { selectorNews } from "../../redux/news/selectors";
import { Link } from "react-router-dom";
function CardNews({ news }) {
  const data = new Date(news.date);
  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();
  const dateNorm = `${day}/${month}/${year}`;

  return (
    <div className={css.box}>
      <img src={`${news.imgUrl}`} alt="ImageCard" className={css.imgCard} />
      <div className={css.boxText}>
        <h2 className={css.cardTitle}>{news.title}</h2>
        <p className={css.text}>{news.text}</p>
      </div>
      <div className={css.boxTextRead}>
        <p className={css.dataCard}>{dateNorm}</p>
        <a
          href={news.url}
          className={css.readMore}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default CardNews;
