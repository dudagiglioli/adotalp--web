import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";

export default function Toolbar() {
 return(
   <header className={styles.toolbar}>

     <div className={styles.start}>
      <img src={logo} alt="Logo Adota LP" className={styles.logo}/>
     </div>

     <div className={styles.middle}>
       teste
     </div>

     <div className={styles.end}>
       dlsd
     </div>
   </header>
 )
}
