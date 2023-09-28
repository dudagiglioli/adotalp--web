import styles from "./Cadastro.module.scss";
import cat from "../../assets/cadastro-login/Cat.png";
import ImageInput from "./ImageInput/imageinput";

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
                  <h1 className={styles.loginButton__h1}> ENTRAR </h1>
                </button>
              </div>
            </div>

            <div className={styles.avatarSpace}>
              <div className={styles.avatarBox}>
                <ImageInput />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <label htmlFor="nome" className={styles.inputBox__label}>
                  {" "}
                  Nome{" "}
                </label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="cpf" className={styles.inputBox__label}>
                  {" "}
                  Cpf{" "}
                </label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  placeholder="Digite seu cpf"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="email" className={styles.inputBox__label}>
                  {""}
                  Email{""}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="number" className={styles.inputBox__label}>
                  {" "}
                  Telefone{" "}
                </label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  placeholder="(xx) xxxxx-xxxx"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="password" className={styles.inputBox__label}>
                  {" "}
                  Senha{" "}
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>

              <div className={styles.inputBox}>
                <label
                  htmlFor="Confirmpassword"
                  className={styles.inputBox__label}
                >
                  {" "}
                  Confirme sua senha{" "}
                </label>
                <input
                  id="Confirmpassword"
                  type="password"
                  name="password"
                  placeholder="Confirme sua senha"
                  required
                  className={styles.inputBox__input}
                ></input>
              </div>
              
            </div>
            <div className={styles.continueButton}>
              <button className={styles.continueButton__btn}>CONTINUE</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
