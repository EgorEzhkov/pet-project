import styles from "./Footer.module.css";

const linkHandler = () => {
  alert("Будут ссылки на настоящие соцсети");
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.listContainer}>
        <h3 className={styles.description}>Контактная информация</h3>
        <p className={styles.listElement}>Email: lalala@la.la</p>
        <p className={styles.listElement}>
          Номер телефона:{" "}
          <a className={styles.linkElement} href="tel:71236523454">
            +7 (123) 652 34-54
          </a>
        </p>
      </div>
      <div className={styles.border}></div>
      <div className={styles.socialContainter}>
        <p className={styles.description}>МЫ В СОЦСЕТЯХ</p>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <a
              href=""
              onClick={() => linkHandler()}
              className={styles.linkElement}
            >
              VK
            </a>
          </li>
          <li className={styles.listElement}>
            <a
              href=""
              onClick={() => linkHandler()}
              className={styles.linkElement}
            >
              INST
            </a>
            *
          </li>
          <li className={styles.listElement}>
            <a
              href=""
              onClick={() => linkHandler()}
              className={styles.linkElement}
            >
              TG
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.unicText}>
        * - запрещенной на территории России соцсети
      </p>
    </footer>
  );
};

export default Footer;
