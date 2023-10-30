import Toolbar from "../../components/Toolbar";
import styles from "./Animais.module.scss";
import TodosAnimais from "../../dados/animaisAll";
import Footer from "../../components/Footer";
import AnimalCards from "../../components/AnimalCards";


export default function Animais() {
  return (
    <div className={styles.back}>
      <Toolbar />
      <div className={styles.ongBox}>
        <h1 className={styles.ongBox__title}>Vamo ajudar nosso bichinhos!</h1>
        <h2 className={styles.ongBox__subtitle}>
          Caso você veja algum animal abandonado entre em contato imediatamente
          com um abrigo de animais local ou um grupo de resgate, vamos ajudar
          esses bichinhos peludos, faça o bem para nossos animais!
        </h2>
      </div>

      <div className={styles.br}></div>

      <div className={styles.dispBox}>
        <h1 className={styles.dispBox__text}> Animais Disponíveis: </h1>
      </div>

      <div className={styles.animais}>
        <AnimalCards/>
      </div>

        <Footer/>
    </div>
  );
}
