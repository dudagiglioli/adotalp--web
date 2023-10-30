import { useEffect, useState } from "react";
import { getAnimals } from "../../services/animals";
import { Animal } from "../../types/animal";

export default function Teste() {
    const [data, setData] = useState<Animal[]>([])

    useEffect(() => {
        getAnimals().then((response) => {
            setData(response)
        })
    }, [])

    console.log(data)

    return(
        <>
            {data.map((animal) => (
                <h1 key={animal.id}>{animal.nomeanimal}</h1>
            ))}
        </>
    );
}
