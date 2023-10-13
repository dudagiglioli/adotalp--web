import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import { BiCommentError, BiCode } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className={styles.back}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={logo} alt="" className={styles.left__img} />
                </div>
                <div className={styles.box}>
                    <div className={styles.cardTitle}>
                        <h1 className={styles.cardTitle__title}> QUER SABER MAIS?</h1>
                    </div>
                    <div className={styles.cardText}>
                        <h1 className={styles.cardText__text}>
                            AdotaLp é um programa criado em prol do bem estar dos animais, fomentando
                            os laços do dono e de seu pet! Vamos juntos conscientizar as pessoas sobre
                            como cuidar dos seus animais, vamos transformar esse mundo um lugar melhor
                            para os animais!
                        </h1>
                    </div>
                    <BiCode/>
                    <BiCommentError/>
                </div>

            </div>
        </footer>
    );
}