import { useState } from "react";
import styles from "./UserLogo.module.css";
import avatar from "../../../assets/avatar.jpg";

const UserLogo = () => {
  //Запрос к серверу, проверяется авторизован ли пользователь. Если нет, то высвечивается кнопка войти
  const [userState, setUserState] = useState<boolean>(false);

  //В src будет путь до фотки пользователя, которая будет браться из бд. Пока не знаю, как это можно будет реализивать
  return userState === false ? (
    <p
      className={styles.text}
      onClick={() => {
        setUserState(true);
        alert("Позже будет перекидывать на другую страницу с авторизацией");
      }}
    >
      Войти
    </p>
  ) : (
    <img
      src={avatar}
      className={styles.userImg}
      onClick={() => {
        setUserState(false);
        alert("Позже будет перекидывать на страницу с профилем");
      }}
    ></img>
  );
};
export default UserLogo;
