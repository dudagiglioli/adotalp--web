import axios from "axios";
import { useEffect, useState } from "react";

export default function Teste(){
    const [animaisList, setAnimaisList] = useState([]);

    useEffect(() =>{
        axios
        .get('http://localhost:8080/animal/todos')
        .then((res) => {
            console.log(res.data)
            setAnimaisList(res.data)
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            {animaisList.map((data) => 
                <div>{data[0]}</div>
        )}
        </div>
    );
}

// https://www.youtube.com/watch?v=q_uRFergAVo implement api