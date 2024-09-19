import styles from "./ListSongs.module.css";
import SongCover from "../../shared/ui/SongCover/SongCover";

const ListSongs = () => {
  return (
    <div className={styles.songsContainer}>
      <SongCover name="Пушистик"></SongCover>
      <SongCover
        cover="https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
        name="Пушистик"
      ></SongCover>
      <SongCover
        cover="https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
        name="Пушистик"
      ></SongCover>
      <SongCover name="Пушистик"></SongCover>
      <SongCover
        cover="https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
        name="Пушистик"
      ></SongCover>
      <SongCover
        cover="https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
        name="Пушистик"
      ></SongCover>
      <SongCover
        cover="https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
        name="Пушистик"
      ></SongCover>
    </div>
  );
};

export default ListSongs;
