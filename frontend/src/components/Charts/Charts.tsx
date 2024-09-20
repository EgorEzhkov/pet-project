import React from "react";
import styles from "./Charts.module.css";
import { testMassiveSongs } from "../../testConst/const";
import SongSmall from "../../shared/ui/SongSmall/SongSmall";

const Charts = () => {
  return (
    <div className={styles.charts}>
      <h1 className={styles.title}>Чарты</h1>
      <div className={styles.songsContainer}>
        <ul className={styles.songsList}>
          <SongSmall
            cover="https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
            name="Пушистик"
            author="Егор Крид"
            time="3:23"
          ></SongSmall>
          {testMassiveSongs.map(() => {
            return <li>la</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Charts;
