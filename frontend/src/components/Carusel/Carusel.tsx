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

  const nextItem = async () => {
    setBlockButton(true);
    setSlideItem(visibleItems);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSlideItem(0);
    const newArr = arr;
    newArr.push(...newArr.slice(0, visibleItems));
    for (let i = 0; i < visibleItems; i++) {
      newArr.shift();
    }
    setArr(newArr);
    setBlockButton(false);
  };

  const prevItem = async () => {
    setBlockButton(true);
    const newArr = arr;
    newArr.unshift(...newArr.slice(newArr.length - 4, newArr.length));
    for (let i = 0; i < visibleItems; i++) {
      newArr.pop();
    }
    setArr(newArr);
    setSlideItem(-visibleItems);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSlideItem(0);
    setBlockButton(false);
  };
  console.log(slideItems);
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Какое-то название</h2>
      <div className={styles.caruselContainer}>
        <button className={styles.button} onClick={prevItem}>
          Назад
        </button>
        <div
          className={`${styles.slideContainer} ${
            slideItems === visibleItems || slideItems === -visibleItems ? styles.transition : null
          }`}
          style={{
            transform: `translateX(${(slideItems * -1 * 100) / visibleItems}%)`,
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
