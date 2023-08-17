import styles from "./Adotalp.module.scss"
import logo from "../../assets/logo.png";

export default function Adotalp(){
    return(
   <div className={styles.toolbar}>
       <img src= {logo} alt="Logo AdotaLP" className={styles.logo}/>
    </div>
    )
}