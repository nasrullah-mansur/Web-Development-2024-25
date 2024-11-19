import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import {
    allBlogsByCategoryLoader,
    allProductsLoader,
    categoryLoader,
} from "./loader/blogLoader";
import CategoryBlogs from "./components/CategoryBlogs";
import { createProduct } from "./action/blogAction";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            loader: categoryLoader,
            children: [
                {
                    path: "/",
                    element: <ProductList />,
                    index: true,
                    loader: allProductsLoader,
                },
                {
                    path: "/create",
                    element: <CreateProduct />,
                    action: createProduct,
                },
                {
                    path: "/category/:categoryName",
                    element: <CategoryBlogs />,
                    loader: allBlogsByCategoryLoader,
                },
            ],
        },
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionStatusRevalidation: true,
            v7_skipActionErrorRevalidation: true,
            v7_relativeSplatPath: true,
        },
    }
);

createRoot(document.getElementById("root")).render(
    <RouterProvider
        router={router}
        future={{
            v7_startTransition: true,
        }}
    />
);
