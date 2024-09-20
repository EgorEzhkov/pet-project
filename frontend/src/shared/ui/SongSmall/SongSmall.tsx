import styles from "./SongSmall.module.css";
import { SongCover } from "../SongCover/SongCover";
import playButton from "../../../assets/playButton.svg";
import infoButton from "../../../assets/moreInfoButton.svg";
import SongInfo from "../SongInfo/SongInfo";
import { useState } from "react";

const SongSmall = (props: SongCover) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div className={styles.songContainer}>
      <div className={styles.coverContainer}>
        <img src={props.cover} alt="" className={styles.cover} />
        <div className={styles.overlay}></div>
        <img src={playButton} alt="" className={styles.playButton} />
      </div>
      <img
        src={infoButton}
        alt=""
        className={styles.infoButton}
        onClick={() => setShowInfo(!showInfo)}
      />
      {showInfo ? <SongInfo></SongInfo> : null}
      <div className={styles.textContainer}>
        <h3 className={styles.author}>{props.author}</h3>
        <h3 className={styles.name}>{props.name}</h3>
      </div>
      <h3 className={styles.time}>{props.time}</h3>
    </div>
  );
};

export default SongSmall;
