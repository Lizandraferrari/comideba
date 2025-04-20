import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Layout from "./components/estrutura/Layout.jsx";
import Carrinho from "./pages/Carrinho.jsx";
import TodosProdutos from "./pages/TodosProdutos.jsx";

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
            {
              path:"/todosprodutos",
              element: <TodosProdutos />
            }
          ]
        }
      ])
    return <RouterProvider router={router} />
}