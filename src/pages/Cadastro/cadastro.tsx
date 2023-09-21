import styles from "./Cadastro.module.scss"
import test from "../../assets/teste.png"

export default function Cadastro(){

    return (
        <body className={styles.back}>
            <div className={styles.container}>
                <div className={styles.formImage}>
                    <img src={test} alt="ll" className={styles.img}/>
                </div>
                <div className={styles.form}>
                    <form action="#">
                        <div className={styles.formHeader}>
                        <div className={styles.title}>
                            <h1>cadastre-se</h1>
                        </div>
                        <div className={styles.loginButton}>
                            <button>entrar</button>
                        </div>
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label htmlFor="firstname"> Primeiro nome </label>
                            <input id="firstname" typeof="text" name="firstname" placeholder="Digite seu primeiro nome" required></input>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="lastname"> Sobrenome </label>
                            <input id="lastname" typeof="text" name="lastname" placeholder="Digite seu sobrenome" required></input>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email"> Email </label>
                            <input id="email" typeof="email" name="email" placeholder="Digite seu email" required></input>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="number"> Telefone </label>
                            <input id="number" typeof="tel" name="number" placeholder="(xx) xxxxx-xxxx" required></input>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password"> Senha </label>
                            <input id="password" typeof="password" name="password" placeholder="Digite sua senha" required></input>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="Confirmpassword"> Confirme sua senha </label>
                            <input id="Confirmpassword" typeof="password" name="password" placeholder="Confirme sua senha" required></input>
                        </div>


                        <div className={styles.genderInputs}>
                            <div className={styles.genderTitle}>
                                <h6>Gênero</h6>
                            </div>

                            <div className={styles.genderInput}>
                                <input type="radio" id="female" name="gender"/>
                                <label htmlFor="female">Feminino</label>
                            </div>
                            
                            <div className={styles.genderInput}>
                                <input type="radio" id="male" name="gender"/>
                                <label htmlFor="male">Masculino</label>
                            </div>

                            <div className={styles.genderInput}>
                                <input type="radio" id="others" name="gender"/>
                                <label htmlFor="others">Outro</label>
                            </div>

                            <div className={styles.genderInput}>
                                <input type="radio" id="none" name="gender"/>
                                <label htmlFor="none">Prefiro não dizer</label>
                            </div>

                            <div className={styles.continueButton}>
                                <button>Continuar</button>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>
          


        </body>
    )

}
