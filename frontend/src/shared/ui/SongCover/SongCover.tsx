import styles from "./SongCover.module.css";

interface SongCover {
  cover: string;
  name: string;
}

const SongCover = (props: SongCover) => {
  return (
    <div className={styles.songCoverContainer}>
      <img src={props.cover} alt="" className={styles.image} />
      <p className={styles.name}>{props.name}</p>
    </div>
  );
};

export default SongCover;
