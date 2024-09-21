import styles from "./Carusel.module.css";
import SongCover from "../../shared/ui/SongCover/SongCover";
import { testMassiveSongs } from "../../testConst/const";

const Carusel = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>Какое-то название</h2>
        <div className={styles.caruselContainer}>
          <button className={styles.button}>Назад</button>
          {testMassiveSongs.map((el, index) => {
            return (
              <SongCover
                cover={el.cover}
                name={el.name}
                author={el.author}
              ></SongCover>
            );
          })}
          <button className={styles.button}>Вперёд</button>
        </div>
      </div>
    </>
  );
};

export default Carusel;
