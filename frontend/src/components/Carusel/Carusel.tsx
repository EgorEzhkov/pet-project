import styles from "./Carusel.module.css";
import SongCover from "../../shared/ui/SongCover/SongCover";
import { testMassiveSongs } from "../../testConst/const";
import { useState } from "react";

const Carusel = () => {
  const [slideItems, setSlideItem] = useState<number>(0);
  const visibleItems = 4;

  const nextItem = () => {
    setSlideItem((prev) =>
      prev + visibleItems >= testMassiveSongs.length ? 0 : prev + visibleItems
    );
  };

  const prevItem = () => {
    setSlideItem((prev) =>
      prev === 0 ? testMassiveSongs.length - visibleItems : prev - visibleItems
    );
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Какое-то название</h2>
      <div className={styles.caruselContainer}>
        <button className={styles.button} onClick={prevItem}>
          Назад
        </button>
        <div
          className={styles.slideContainer}
          style={{
            transform: `translateX(-${(slideItems * 100) / visibleItems}%)`,
          }}
        >
          {testMassiveSongs.map((el, index) => (
            <div className={styles.slider} key={index}>
              <SongCover cover={el.cover} name={el.name} author={el.author} />
            </div>
          ))}
        </div>
        <button className={styles.button} onClick={nextItem}>
          Вперёд
        </button>
      </div>
    </div>
  );
};

export default Carusel;
