import { useEffect, useState } from 'react';
import { getAnimals } from '../../services/animals';
import { Animal } from '../../types/animal';

import styles from "./AnimalCards.module.scss";


export default function AnimalCards(){

    /* ---------------------------------------------------------------- */
    const [data, setData] = useState<Animal[]>([])

    useEffect(() => {
        getAnimals().then((response) => {
            setData(response)
        })
    }, [])

    console.log(data)
    /* ----------------- End consume Api ------------------------------ */


    return(
        <>
        {data.map((animal) => (
            <h1 key={animal.id}> {animal.nomeanimal}</h1>
        ))}
        
        </>
    );
}