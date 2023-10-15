import Toolbar from "../../components/Toolbar/toolbar";
import styles from "./Desenvolvedores.module.scss";
import Marcela from "../../assets/desenvolvedores/Marcela.png";
import { FaGithub } from "react-icons/fa";

export default function Desenvolvedores() {
    return (
        <body>
            <Toolbar />
            <div className={styles.back}>

                <div className={styles.titleBox}>
                    <h1 className={styles.titleBox__title}> DESENVOLVEDORES </h1>
                </div>

                <div className={styles.cardBox}>

                    <div className={styles.card}>
                        <div className={styles.cardimg}>
                            <img src={Marcela} alt="Desenvolvedor" className={styles.cardImg__img} />
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.cardStart}>
                                <h1 className={styles.cardStart__text}>Marcela Martins</h1>
                            </div>
                            <div className={styles.cardEnd}>
                                <FaGithub/>
                            </div>
                        </div>
                    </div>
                    {/* Fim do card - 1 */}

                    <div className={styles.card}>
                        
                    </div>
                    {/* Fim do card - 2 */}

                    <div className={styles.card}>

                    </div>
                    {/* Fim do card - 3 */}

                </div>
                {/* Fim do cardBox */}

            </div>
        </body>
    );
}