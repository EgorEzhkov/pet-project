import styles from "./Carusel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SongCover from "../../shared/ui/SongCover/SongCover";

const Carusel = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.title}>Какое-то название</h2>
        <div className={styles.caruselContainer}>
            <SongCover
              cover="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg"
              name="Сочный кекс"
              author="Григорий Лепс"
            ></SongCover>
            <SongCover
              cover="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg"
              name="Сочный кекс"
              author="Григорий Лепс"
            ></SongCover>
            <SongCover
              cover="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg"
              name="Сочный кекс"
              author="Григорий Лепс"
            ></SongCover>
            <SongCover
              cover="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg"
              name="Сочный кекс"
              author="Григорий Лепс"
            ></SongCover>
            <SongCover
              cover="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg"
              name="Сочный кекс"
              author="Григорий Лепс"
            ></SongCover>
            <SongCover
              cover="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg"
              name="Сочный кекс"
              author="Григорий Лепс"
            ></SongCover>
        </div>
      </div>
    </>
  );
};

export default Carusel;
