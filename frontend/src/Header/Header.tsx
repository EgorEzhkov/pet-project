import { useEffect, useState } from "react";
import Logo from "../shared/ui/logo/Logo";

import styles from "./Header.module.css";
import UserLogo from "../shared/ui/UserLogo/UserLogo";

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setDirection("down");
    } else {
      setDirection("up");
    }

    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      className={`${styles.headerContainer} ${
        direction === "down" ? styles.headerHidden : ""
      }`}
    >
      <div
        className={styles.logo}
        onClick={() => {
          alert("Будет перекидывать на главную страницу");
        }}
      >
        <Logo></Logo>
      </div>
      <ul className={styles.listContainer}>
        <li className={styles.listElement}>Главная</li>
        <li className={styles.listElement}>Плейлист</li>
        <li className={styles.listElement}>Меню</li>
        <li className={styles.listElement}>Настройки</li>
      </ul>
      <div className={`${styles.userContainer} ${styles.listElement}`}>
        <UserLogo></UserLogo>
      </div>
    </header>
  );
};

export default Header;
