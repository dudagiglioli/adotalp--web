import Toolbar from "../../components/Toolbar/toolbar";
import styles from "./Home.module.scss";
import Banner from "../../assets/banner.png";

import Animal from "../../components/Dados/animais.json";

export default function Home() {
  return (
    <body>
      <Toolbar />
      <div className={styles.back}>
        <div className={styles.bannerBox}>
          <img src={Banner} alt="" className={styles.bannerBox__img} />
        </div>

        <div className={styles.br}></div>
        <div className={styles.animalContainer}>
          {Animal.map((animal) => {
            return <div>{animal.nomeAnimal}</div>;
          })}
        </div>
      </div>
    </body>
  );
}

// https://www.youtube.com/watch?v=aJgAwjP20RY JSON
