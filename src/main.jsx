import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import { allCategoryLoader, categoryLoader } from "./loader/blogLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: categoryLoader,
        children: [
            {
                path: "/",
                element: <ProductList />,
                index: true,
                loader: allCategoryLoader,
            },
            {
                path: "/create",
                element: <CreateProduct />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
