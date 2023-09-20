import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";
import { BiSearch } from "react-icons/bi";

export default function Toolbar() {
 return(
   <header className={styles.toolbar}>

     <div className={styles.start}>
      <img src={logo} alt="Logo Adota LP" className={styles.start__logo}/>
     </div>

     <div className={styles.middle}>
    
     </div>

     <div className={styles.end}>
     <div className={styles.end__searchBox}>
        <button className={styles.end__searchBox__searchButton}>
        <BiSearch className={styles.end__searchBox__searchIcon} size={30}/>
        </button>
      </div>
     </div>
   </header>
 )
}
