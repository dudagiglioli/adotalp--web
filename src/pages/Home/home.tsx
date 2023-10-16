import Toolbar from "../../components/Toolbar/toolbar";
import styles from "./Home.module.scss";
import Banner from "../../assets/banner2.png";
// import AnimalDados from "../../dados/animais.json";
import AnimalDados from "../../dados/animais";
import Footer from "../../components/Footer/footer";

export default function Home() {
  return (
    <body>
      <header>
        <Toolbar />
      </header>
      <div className={styles.back}>
        <div className={styles.bannerBox}>
          <img src={Banner} alt="" className={styles.bannerBox__img} />
          <div className={styles.bannerBox__text}>
            BEM-VINDO!
          </div>
        </div>
     

        <div className={styles.adoteContainer}>
          <div className={styles.adoteBox}>
            <h1 className={styles.adoteBox__title}> QUER ADOTAR UM PET? </h1>
            <h3 className={styles.adoteBox__subtitle}>
              Que tal um novo amigo na sua casa? Dê uma conferida em alguns que
              estão para a adoção!
            </h3>
          </div>
        </div>
        {/* Fim do adoteContainer */}

        <div className={styles.animais}>
          {AnimalDados.map((dados) => {
            return (
              <div className={styles.animaisCard}>
                <div className={styles.imgBox}>
                  <img src={dados.fotoAnimal} alt="Foto do animal" className={styles.imgBox__img} />
                  <div className={styles.imgBox__cidadeBox}>
                    <div className={styles.cidadeContent}>
                      <h1 className={styles.cidadeContent__text}>{dados.cidade}</h1>
                    </div>
                  </div>
                </div>
                <div className={styles.cardText}>
                  <div className={styles.cardTextStart}>
                    <h1 className={styles.cardTextStart__title}> {dados.nomeAnimal} </h1>                 
                    <div className={styles.cardTextStart__line}>.</div>
                  </div>
                
                  <div className={styles.cardTextEnd}>

                    <div className={styles.categorias}>
                        <h1 className={styles.categoriasText}> IDADE -  </h1>
                        <h1 className={styles.categoriasText2}> {dados.idade} </h1>
                    </div>
                    <div className={styles.categorias}>
                        <h1 className={styles.categoriasText}> PORTE - </h1>
                        <h1 className={styles.categoriasText2}> {dados.porte} </h1>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
        {/* Fim do animaisContainer */}
      </div>
      <footer>
        <Footer/>
      </footer>
    </body>
  );
}
