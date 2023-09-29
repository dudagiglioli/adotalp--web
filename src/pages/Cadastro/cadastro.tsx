import styles from "./Cadastro.module.scss";
import cat from "../../assets/Cat.png";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { cpf } from "cpf-cnpj-validator";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Entre com um email válido")
    .required("Email válido"),

  password: yup
    .string()
    .min(8, "Password minimum 8 characters")
    .required("Password is required"),

  confirmpassword: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Confirmação incorreta"),

  cpf: yup
    .string()
    .required("CPF is required")
    .test((value) => cpf.isValid(value)),
});

const handleSubmit = (values: any) => {
  console.log(values);
};

export default function Cadastro() {
  return (
    <>
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

              <div className={styles.inputGroup}>
                <div className={styles.inputBox}>
                  <label htmlFor="firstname" className={styles.inputBox__label}>
                    {" "}
                    Nome Completo{" "}
                  </label>
                  <input
                    id="firstname"
                    typeof="text"
                    name="firstname"
                    placeholder="Digite seu nome completo"
                    required
                    className={styles.inputBox__input}
                  ></input>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cpf" className={styles.inputBox__label}>
                    {" "}
                    CPF{" "}
                  </label>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formikProps) => (
                      <Form>
                        <div>
                          <Field
                            name="cpf"
                            placeholder="Digite seu CPF"
                            required
                            className={styles.inputBox__input}
                          />
                          <ErrorMessage component="div" name="cpf" />
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>

                <div>
                  <label htmlFor="email" className={styles.inputBox__label}>
                    {""}
                    Email{""}
                  </label>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formikProps) => (
                      <Form>
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Digite seu email"
                          required
                          className={styles.inputBox__input}
                        />
                      </Form>
                    )}
                  </Formik>
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="number" className={styles.inputBox__label}>
                    {" "}
                    Telefone{" "}
                  </label>
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
                  <label htmlFor="password" className={styles.inputBox__label}>
                    {""}
                    Senha {""}
                  </label>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {(formikProps) => (
                      <Form>
                        <div>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            required
                            className={styles.inputBox__input}
                          />
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>

                <div className={styles.inputBox}>
                  <label
                    htmlFor="confirmpassword"
                    className={styles.inputBox__label}
                  >
                    {" "}
                    Confirme sua senha{" "}
                  </label>
                  <input
                    id="confirmpassword"
                    typeof="confirmpassword"
                    name="confirmpassword"
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
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      className={styles.genderInput__input}
                    />
                    <label
                      htmlFor="female"
                      className={styles.genderInput__label}
                    >
                      Feminino
                    </label>
                  </div>

                  <div className={styles.genderInput}>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      className={styles.genderInput__input}
                    />
                    <label htmlFor="male" className={styles.genderInput__label}>
                      Masculino
                    </label>
                  </div>

                  <div className={styles.genderInput}>
                    <input
                      type="radio"
                      id="others"
                      name="gender"
                      className={styles.genderInput__input}
                    />
                    <label
                      htmlFor="others"
                      className={styles.genderInput__label}
                    >
                      Outro
                    </label>
                  </div>

                  <div className={styles.genderInput}>
                    <input
                      type="radio"
                      id="none"
                      name="gender"
                      className={styles.genderInput__input}
                    />
                    <label htmlFor="none" className={styles.genderInput__label}>
                      Prefiro não dizer
                    </label>
                  </div>
                </div>

                <div className={styles.continueButton}>
                  <button className={styles.continueButton__btn}>
                    CONTINUE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
