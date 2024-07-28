import Header from "../Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.testContainer}></div>
    </>
  );
}

export default App;
