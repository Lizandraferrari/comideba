import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Layout from "./components/estrutura/Layout.jsx";

export default function Rotas (){
    const router = createBrowserRouter([
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
          ]
        }
      ])
    return <RouterProvider router={router} />
}