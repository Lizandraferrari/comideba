import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Layout from "./components/estrutura/Layout.jsx";
import Carrinho from "./pages/Carrinho.jsx";

export default function Rotas (){
    const router = createBrowserRouter([
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path:"/carrinho",
              element: <Carrinho />
            },
          ]
        }
      ])
    return <RouterProvider router={router} />
}