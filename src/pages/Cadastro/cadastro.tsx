import styles from "./Cadastro.module.scss";
import cat from "../../assets/Cat.png"
import MaskedInput from "./MaskedInput"

export default function Cadastro() {
  return (

    <body className={styles.back}>
      <div className={styles.container}>
        <div className={styles.formImage}>
          <img src={cat} alt="ll" className={styles.img} />
        </div>

        <div className={styles.form}>
          <form action="#">
            <div className={styles.formHeader}>
              <div className={styles.title}>
                <h1 className={styles.h1}>BEM-VINDO!</h1>
              </div>
              <div className={styles.loginButton}>
                <button className={styles.loginButton__button}>
                  <h1  className={styles.loginButton__h1}> ENTRAR </h1>
                  </button>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <label htmlFor="firstname" className={styles.inputBox__label}> Nome </label>
                <input
                  id="nome"
                  typeof="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="lastname" className={styles.inputBox__label}> Cpf </label>
                <MaskedInput/>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="email" className={styles.inputBox__label}> Email </label>
                <input
                  id="email"
                  typeof="email"
                  name="email"
                  placeholder="Digite seu email"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="number" className={styles.inputBox__label}> Telefone </label>
                <input
                  id="number"
                  typeof="tel"
                  name="number"
                  placeholder="(xx) xxxxx-xxxx"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="password" className={styles.inputBox__label}> Senha </label>
                <input
                  id="password"
                  typeof="password"
                  name="password"
                  placeholder="Digite sua senha"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="Confirmpassword" className={styles.inputBox__label}> Confirme sua senha </label>
                <input
                  id="Confirmpassword"
                  typeof="password"
                  name="password"
                  placeholder="Confirme sua senha"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>
            </div>

            <div className={styles.genderInputs}>
              <div className={styles.genderTitle}>
                <h6 className={styles.genderTitle__h6}>Gênero</h6>
              </div>

              <div className={styles.genderGroup}>
                <div className={styles.genderInput}>
                  <input type="radio" id="female" name="gender" className={styles.genderInput__input}/>
                  <label htmlFor="female" className={styles.genderInput__label}>Feminino</label>
                </div>

                <div className={styles.genderInput}>
                  <input type="radio" id="male" name="gender" className={styles.genderInput__input}/>
                  <label htmlFor="male" className={styles.genderInput__label}>Masculino</label>
                </div>

                <div className={styles.genderInput}>
                  <input type="radio" id="others" name="gender" className={styles.genderInput__input}/>
                  <label htmlFor="others" className={styles.genderInput__label}>Outro</label>
                </div>

                <div className={styles.genderInput}>
                  <input type="radio" id="none" name="gender" className={styles.genderInput__input}/>
                  <label htmlFor="none" className={styles.genderInput__label}>Prefiro não dizer</label>
                </div>

               
              </div>
              <div className={styles.continueButton}>
                  <button className={styles.continueButton__btn}>CONTINUE</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
