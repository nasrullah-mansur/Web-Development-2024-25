import { redirect } from "react-router-dom";
import { api } from "../api/api";

async function createProduct({ request }) {
    const formData = await request.formData();

    console.log(formData.get("title"));

    const formObjectData = Object.fromEntries(formData);

    // console.log(formObjectData);

    api.post("/products", formObjectData);

    return redirect("/");
}

export { createProduct };
