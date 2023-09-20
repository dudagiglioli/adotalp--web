import styles from "./Cadastro.module.scss"

export default function Cadastro(){

    return (
        <div className={styles.container}>
            <div className={styles.firstContent}>

                <div className={styles.firstColumn}>
                    <h2 className={styles.firstColumn__title}> Obrigado por Voltar!</h2>
                    <p className={styles.firstColumn__description}> Continue coom a gente</p>
                    <p className={styles.firstColumn__description}> logue com sua conta pessoal</p>
                    <button className={styles.firstColumn__btn}> login </button>
                </div>
                {/* first column */}

                <div className={styles.secondColumn}>
                    <h2 className={styles.secondColumn__title}> crie sua conta </h2>

                    <div className={styles.secondColumn__socialMedia}>
                        <ul>
                            <li>  facebook </li>
                            <li>  google+  </li>
                            <li>  linkedin </li>
                        </ul>
                    </div>

                    <p className={styles.secondColumn__description}> ou use seu e-mail para se registrar: </p>

                    <form className={styles.form}> 
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <button className={styles.form__btn}> cadastro </button>
                    </form>
                </div>
            </div>

            {/* First content ------------------------------------------------------------------------------------------------------ */}

        <div className={styles.secondContent}>
            <div className={styles.firstColumn}>
                    <h2 className={styles.firstColumn__title}> Obrigado por Voltar!</h2>
                    <p className={styles.firstColumn__description}> Continue coom a gente</p>
                    <p className={styles.firstColumn__description}> logue com sua conta pessoal</p>
                    <button className={styles.firstColumn__btn}> login </button>
            </div>
                {/* first column */}

                <div className={styles.secondColumn}>
                    <h2 className={styles.secondColumn__title}> crie sua conta </h2>

                    <div className={styles.secondColumn__socialMedia}>
                        <ul>
                            <li>  facebook </li>
                            <li>  google+  </li>
                            <li>  linkedin </li>
                        </ul>
                    </div>

                    <p className={styles.secondColumn__description}> ou use seu e-mail para se registrar: </p>

                    <form className={styles.form}> 
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <button className={styles.form__btn}> cadastro </button>
                    </form>
                </div>
             </div>
              {/* Second content ------------------------------------------------------------------------------------------------------ */}

        </div>
        
    )

}

// https://www.youtube.com/watch?v=GtsNZtzZiec&list=PLARhMvcrqcLy3bU1RxbkC7GYH7eHgXI0A 19:43