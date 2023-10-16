import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import ErrorPage from "./pages/ErrorPage";

// 1- configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Desenvolvedores from "./pages/Desenvolvedores";
import Ajuda from "./pages/Ajuda";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // Pagina de erro xxxxxxxx
    errorElement: <ErrorPage/>,
  },
  {
    path: "cadastro",
    element: <Cadastro/>,
  },
  {
    path: "desenvolvedores",
    element: <Desenvolvedores/>
  },
  {
    path: "ajuda",
    element: <Ajuda/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


// https://www.youtube.com/watch?v=7b42lVMdEjE  QUAQLUER DUVIDA SOBRE AS rotas