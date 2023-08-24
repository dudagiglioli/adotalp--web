import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
     
        <img src={logo} alt="Logo AdotaLP" className={styles.logo} />
        <h1>lksdhgkjsh</h1>
     
    </header>
  );
}
