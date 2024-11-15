import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
import { api } from "./api/api";

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // Getting data for Products;
    useEffect(() => {
        try {
            async function getData() {
                // const conn = await fetch("http://localhost:3000/products");
                // const data = await conn.json();
                // setProducts(data);

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
                // const conn = await fetch("http://localhost:3000/categories");
                // const data = await conn.json();
                // setCategories(data);

                const conn = await api.get("/categories");
                console.log(conn);

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
            <ProductList products={products} />
        </div>
    );
}

export default App;
