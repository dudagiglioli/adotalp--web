import styles from "./ErrorPage.module.scss";
import errorimage from "../../assets/error-page/Error.png"
import { IoIosArrowRoundBack } from "react-icons/io"

export default function ErrorPage(){
    return(
        <body className={styles.back}>
            <div className={styles.container}>
                <div className={styles.startBox}>
                    <img src={errorimage} alt="error" />
                    <button className={styles.comeback}>
                        <IoIosArrowRoundBack size={"35px"}/>
                    </button>
                </div>
                <div className={styles.endBox}>

                </div>
            </div>
        </body>
    );
}