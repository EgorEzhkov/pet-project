import styles from "./SongCover.module.css";
import buttonPlay from "../../../assets/playButton.svg";
import moreInfoButton from "../../../assets/moreInfoButton.svg";
export interface ISongCover {
  cover: string;
  name: string;
  author: string;
  time?: string;
}

const SongCover = (props: ISongCover) => {
  return (
    <div className={styles.songCoverContainer}>
      <div className={styles.imgContainer}>
        <img src={props.cover} alt="" className={styles.image} />
        <div className={styles.overlay}>
          <img
            src={buttonPlay}
            alt="buttonPlay"
            className={styles.buttonPlay}
          />
          <img src={moreInfoButton} alt="" className={styles.moreInfoButton} />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.name} ${styles.author}`}>{props.author}</p>
        <p className={styles.name}>{props.name}</p>
      </div>
    </div>
  );
};

export default SongCover;
