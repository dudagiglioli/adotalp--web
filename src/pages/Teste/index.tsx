import { getAnimais } from "../../services/animais/animais";

export default function Teste() {
    return(
        <>
            <h1>Teste</h1>
            <br /><br />
            <List />
        </>
    );
}

const List = async () => {
    const data = await getAnimais()

    return (
        <div>
            {data.map((animal: any) => (
                <h1 key={animal.id}>{animal.nomanimal}</h1>
            ))}
        </div>
    )
}