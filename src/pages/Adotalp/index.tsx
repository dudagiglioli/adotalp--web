import styles from "./Adotalp.module.scss"
import logo from "../../assets/logo.png";

export default function Adotalp(){
    return(
        
   <div className={styles.toolbar}>

       <img src= {logo} alt="Logo AdotaLP" className={styles.logo}/>
       <h1 className={styles.title}>ADOTA LP</h1>

    </div>
    )
}