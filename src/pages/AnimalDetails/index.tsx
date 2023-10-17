import { useParams } from 'react-router-dom';
import AnimalDados from '../../dados/animais';
import dados from '../../dados/animais';
export default function AnimalDetails(){

    const { id } = useParams();

    return(
        <div>
            {AnimalDados.map((dados) => {
                return (
                    <h1 key={dados.id}>{dados.nomeAnimal}</h1>
                );
            })}

            <h2> {id}   </h2>
        </div>
    )
}