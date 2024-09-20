import styles from "./Main.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListSongs from "../../components/ListSongs/ListSongs";
import Charts from "../Charts/Charts";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header></Header>
      <Charts></Charts>
      <ListSongs></ListSongs>
      <Footer></Footer>
    </div>
  );
};

export default Main;
