import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { PiDogLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <div className={styles.start}>
        <Link to={"/"}>
          <img src={logo} alt="Logo Adota LP" className={styles.start__logo} />
        </Link>
      </div>

      <div className={styles.middle}></div>

      <div className={styles.end}>
        <div className={styles.end__searchBox}>
          <button className={styles.end__searchButton}>
            <BiSearch size={"35px"} />
          </button>
          <Link to={"/cadastro"}>
            <button className={styles.end__searchButton}>
              <GoPerson size={"35px"} />
            </button>
          </Link>
          <Link to={"/animais"} >
            <button className={styles.end__searchButton}>
              <PiDogLight size={"35px"} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
