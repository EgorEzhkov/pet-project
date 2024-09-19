import styles from "./SongCover.module.css";
import buttonPlay from "../../../assets/playButton.svg";
import noCoverImage from "../../../assets/noCoverImage.svg";
interface SongCover {
  cover?: string;
  name: string;
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
          <img src={buttonPlay} alt="" className={styles.buttonPlay} />
        </div>
      </div>
      <p className={styles.name}>{props.name}</p>
    </div>
  );
};

export default SongCover;
