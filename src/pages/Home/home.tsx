import Toolbar from "../../components/Toolbar/toolbar";
import styles from "./Home.module.scss";
import Banner from "../../assets/banner.png";
import AnimalCards from "../../components/AnimalCards/animal";

export default function Home() {
  return (
    <body>
      <Toolbar />
      <div className={styles.back}>
        <div className={styles.bannerBox}>
          <img src={Banner} alt="" className={styles.bannerBox__img} />
        </div>

        <div className={styles.adoteContainer}>
          <div className={styles.adoteBox}>
            <h1 className={styles.adoteBox__title}> QUER ADOTAR UM PET? </h1>
            <h3 className={styles.adoteBox__subtitle}> Que tal um novo amigo na sua casa?, dê uma conferida em alguns que estão disponíveis!</h3>
          </div>
        </div>
        {/* Fim do adoteContainer */}

        <div className={styles.animaisContainer}>
          <div className={styles.animaisBox}>
            <AnimalCards/>
          </div>
        </div>
        {/* Fim do animaisContainer */}



      </div>
    </body>
  );
}

// https://www.youtube.com/watch?v=aJgAwjP20RY JSON
