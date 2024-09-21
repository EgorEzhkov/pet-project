import styles from "./Main.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListSongs from "../../components/ListSongs/ListSongs";
import Charts from "../Charts/Charts";
import Carusel from "../Carusel/Carusel";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header></Header>
      <Charts></Charts>
      <Carusel deviceType="desktop"></Carusel>
      <ListSongs></ListSongs>
      <Footer></Footer>
    </div>
  );
};

export default Main;
