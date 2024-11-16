import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import { api } from "./api/api";
import CreateProduct from "./components/CreateProduct";

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // Getting data for Products;
    useEffect(() => {
        try {
            async function getData() {
                const conn = await api.get("/products");
                setProducts(conn.data);
            }

            getData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    // Getting data for Categories;
    useEffect(() => {
        try {
            async function getData() {
                const conn = await api.get("/categories");

                setCategories(conn.data);
            }

            getData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="bg-slate-100 p-6 max-w-screen-2xl mx-auto grid grid-cols-12 gap-4">
            <Sidebar categories={categories} />
            <CreateProduct />
        </div>
    );
}

export default App;
