import styles from "./Toolbar.module.scss";
import logo from "../../assets/logo.png";

export default function Toolbar() {
 return(
   <header className={styles.toolbar}>

     <div className={styles.start}>
      <img src={logo} alt="Logo Adota LP" className={styles.logo}/>
     </div>

     <div className={styles.middle}>
       <div className={styles.middle__text}>ADOTA LP</div>
     </div>

     <div className={styles.end}>
      <input type="search" name="pesquisa" placeholder="Ache seu companheiro!">
    
      </input>
     </div>
   </header>
 )
}
