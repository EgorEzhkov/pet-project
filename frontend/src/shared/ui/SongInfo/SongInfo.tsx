import styles from "./SongInfo.module.css";

const SongInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.subtitle}>Какой-то пункт</h3>
      <h3 className={styles.subtitle}>Лайк</h3>
      <h3 className={styles.subtitle}>Дизлайк</h3>
      <h3 className={styles.subtitle}>Перейти к автору</h3>
    </div>
  );
};

export default SongInfo;
