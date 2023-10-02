import Toolbar from "../Toolbar/toolbar";


// 2- Reaproveitamento da estrutura do router
import { Outlet } from "react-router-dom";
// serve para quando tiver lá no seu index.tsx no path, children, tiver uma / tambem, sendo assim ele vai buscar os dois ao
// mesmo tempo mostrando os juntos, para isso é so importar e puxar ele como se fosse um component

export default function Home(){
    return(
        <div className="back">
            <Toolbar/>
        </div>
    );
}