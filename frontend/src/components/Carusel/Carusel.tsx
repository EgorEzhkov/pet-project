import styles from "./Carusel.module.css";
import SongCover, { ISongCover } from "../../shared/ui/SongCover/SongCover";
import { testMassiveSongs } from "../../testConst/const";
import { useEffect, useState } from "react";

const Carusel = () => {
  const [slideItems, setSlideItem] = useState<number>(0);
  const [arr, setArr] = useState<Array<ISongCover>>([]);
  const [blockButton, setBlockButton] = useState<boolean>(false);
  const visibleItems = 4;

  useEffect(() => {
    setArr(testMassiveSongs);
  }, []);

  const nextItem = () => {
    setBlockButton(true);
    setSlideItem(4);
    setTimeout(() => {
      console.log("timer");
      setSlideItem(0);
      const newArr = arr;
      newArr.push(...newArr.slice(0, 4));
      for (let i = 0; i < 4; i++) {
        newArr.shift();
      }
      setArr(newArr);
      setBlockButton(false);
    }, 500);
  };
  const prevItem = () => {
    setSlideItem((prev) =>
      prev === 0 ? testMassiveSongs.length - visibleItems : prev - visibleItems
    );
  };
  console.log(arr);
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Какое-то название</h2>
      <div className={styles.caruselContainer}>
        <button className={styles.button} onClick={prevItem}>
          Назад
        </button>
        <div
          className={`${styles.slideContainer} ${
            slideItems === 4 ? styles.transition : null
          }`}
          style={{
            transform: `translateX(-${(slideItems * 100) / visibleItems}%)`,
          }}
        >
          {arr.map((el, index) => (
            <div className={styles.slider} key={index}>
              <SongCover cover={el.cover} name={el.name} author={el.author} />
            </div>
          ))}
        </div>
        <button
          className={styles.button}
          onClick={nextItem}
          disabled={blockButton}
        >
          Вперёд
        </button>
      </div>
    </div>
  );
};

export default Carusel;
