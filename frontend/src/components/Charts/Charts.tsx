import styles from "./Charts.module.css";
import { testMassiveSongs } from "../../testConst/const";
import SongSmall from "../../shared/ui/SongSmall/SongSmall";

const Charts = () => {
  return (
    <div className={styles.charts}>
      <h1 className={styles.title}>Чарты</h1>
      <div className={styles.songsContainer}>
        <ul className={styles.songsList}>
          {testMassiveSongs.map((el, index) => {
            return index <= 9 ? (
              <li className={styles.song} key={index}>
                <p className={styles.position}>{index + 1}</p>
                <SongSmall
                  cover={el.cover}
                  name={el.name}
                  author={el.author}
                  time="3:23"
                ></SongSmall>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Charts;
