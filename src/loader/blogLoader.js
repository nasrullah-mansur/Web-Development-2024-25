import { api } from "../api/api";

async function categoryLoader() {
    const conn = await api.get("/categories");
    return conn.data;
}

async function allProductsLoader() {
    const conn = await api.get("/products");
    return conn.data;
}

async function allBlogsByCategoryLoader({ params }) {
    console.log(params.categoryName);

    const conn = await api.get("/products");
    const updatedData = await conn.data.filter((item) => {
        return item.category === params.categoryName;
    });
    return updatedData;
}

export { categoryLoader, allProductsLoader, allBlogsByCategoryLoader };
