import Toolbar from "../../components/Toolbar/toolbar";
import styles from "./Desenvolvedores.module.scss";

export default function Desenvolvedores() {
    return(
        <body>
            <Toolbar/>
            <div className={styles.back}>
                <div className={styles.titleBox}>
                    <h1 className={styles.titleBox__title}> DESENVOLVEDORES </h1>
                </div>

            </div>
        </body>
    );
}