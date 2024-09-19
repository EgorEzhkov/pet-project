import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.testContainer}></div>
      <Footer></Footer>
    </>
  );
}

export default App;
