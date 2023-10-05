import Toolbar from "../../components/Toolbar/toolbar";
import styles from "./Home.module.scss";
import Banner from "../../assets/banner.png";

export default function Home() {
  return (
    <body>
      <Toolbar />
      <div className={styles.back}>
        <div className={styles.bannerBox}>
          <img src={Banner} alt="" className={styles.bannerBox__img}/>
        </div>
      </div>
    </body>
  );
}
