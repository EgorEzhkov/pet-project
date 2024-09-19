import styles from "./SongCover.module.css";
import buttonPlay from "../../../assets/playButton.svg";
import noCoverImage from "../../../assets/noCoverImage.svg";
import moreInfoButton from "../../../assets/moreInfoButton.svg";
interface SongCover {
  cover?: string;
  name: string;
  author: string;
}

const SongCover = (props: SongCover) => {
  return (
    <div className={styles.songCoverContainer}>
      <div className={styles.imgContainer}>
        {props.cover ? (
          <img src={props.cover} alt="" className={styles.image} />
        ) : (
          <img
            src={noCoverImage}
            alt=""
            className={`${styles.image} ${styles.noImage}`}
          />
        )}
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
