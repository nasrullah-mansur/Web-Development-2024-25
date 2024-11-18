import { api } from "../api/api";

async function categoryLoader() {
    const conn = await api.get("/categories");
    return conn.data;
}

async function allCategoryLoader(test) {
    console.log(test);

    const conn = await api.get("/products");
    return conn.data;
}

export { categoryLoader, allCategoryLoader };
