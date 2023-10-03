import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/home";
import Cadastro from "./pages/Cadastro/cadastro";
import ErrorPage from "./pages/ErrorPage/errorpage";

// 1- configurando o router
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // Pagina de erro xxxxxxxx
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "cadastro",
        element: <Cadastro/>,
      },
    ]
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