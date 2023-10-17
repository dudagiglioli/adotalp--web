import Toolbar from "../../components/Toolbar";
import styles from "./Animais.module.scss";
import TodosAnimais from "../../dados/animaisAll";
import dadosAll from '../../dados/animaisAll';

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

      <div className={styles.dispBox}>
        <h1 className={styles.dispBox__text}> Animais Disponíveis: </h1>
      </div>

      <div className={styles.animais}>
        {TodosAnimais.map((dadosAll) => {
          return (
            <div className={styles.animaisCard}>
              <div className={styles.imgBox}>
                <img
                  src={dadosAll.fotoAnimal}
                  alt="Foto do animal"
                  className={styles.imgBox__img}
                />
                <div className={styles.imgBox__cidadeBox}>
                  <div className={styles.cidadeContent}>
                    <h1 className={styles.cidadeContent__text}>
                      {dadosAll.cidade}
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTextStart}>
                  <h1 className={styles.cardTextStart__title}>
                    {" "}
                    {dadosAll.nomeAnimal}{" "}
                  </h1>
                  <div className={styles.cardTextStart__line}>.</div>
                </div>

                <div className={styles.cardTextEnd}>
                  <div className={styles.categorias}>
                    <h1 className={styles.categoriasText}> IDADE - </h1>
                    <h1 className={styles.categoriasText2}> {dadosAll.idade} </h1>
                  </div>
                  <div className={styles.categorias}>
                    <h1 className={styles.categoriasText}> PORTE - </h1>
                    <h1 className={styles.categoriasText2}> {dadosAll.porte} </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
