import styles from "./Animal.module.scss"
import Dados from "../../dados/animais.json"

type IOpcao = typeof Dados[0];

export default function Animal(opcao: IOpcao){
    return(
        <div className={styles.animalCard}>
            
            {Dados.map((opcao) =>
            <p key={opcao.id}>{opcao.nomeAnimal}</p>
            )}

        </div>
    );
}