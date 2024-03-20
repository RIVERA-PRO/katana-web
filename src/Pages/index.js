import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import PageDetail from '../Pages/PageDetail/PageDetail'
import PageProductos from "./PageProductos/PageProductos";
import Contacto from "./Contacto/Contacto";
import Nosotros from "./Nosotros/Nosotros";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/producto/:id/:producto",
                element: <PageDetail />,
            },
            {
                path: "/productos",
                element: <PageProductos />,
            },
            {
                path: "/contacto",
                element: <Contacto />,
            },
            {
                path: "/nosotros",
                element: <Nosotros />,
            },
        ],
    },
]);
