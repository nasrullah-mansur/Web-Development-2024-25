import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import { api } from "../api/api";
import { Form, useNavigate } from "react-router-dom";

export default function CreateProduct() {
    const [categories, setCategories] = useState([]);
    // const { attr: titleProps, onClear: titleClear } = useInput("");
    // const { attr: descriptionProps, onClear: desClear } = useInput("");
    // const { attr: categoryProps, onClear: categoryClear } = useInput("");
    // const { attr: imageProps, onClear: imageClear } = useInput("");
    // const { attr: priceProps, onClear: priceClear } = useInput("");
    // const { attr: rattingProps, onClear: rattingClear } = useInput("");

    // const navigate = useNavigate();

    // const handleSubmit = () => {
    //     const formData = {
    //         title: titleProps.value,
    //         image: imageProps.value,
    //         description: descriptionProps.value,
    //         price: priceProps.value,
    //         ratting: rattingProps.value,
    //         category: categoryProps.value,
    //     };

    //     api.post("/products", formData);

    //     titleClear();
    //     desClear();
    //     categoryClear();
    //     imageClear();
    //     priceClear();
    //     rattingClear();

    //     navigate("/");
    // };

    useEffect(() => {
        async function getCategory() {
            try {
                const conn = await api.get("/categories");
                setCategories(conn.data);
            } catch (error) {
                console.log(error);
            }
        }

        getCategory();
    }, []);

    return (
        <div className="col-span-9 bg-white p-3">
            <h2 className="text-3xl font-bold mb-5">Create Product</h2>

            <Form method="post">
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your title
                    </label>
                    <input
                        // value={value}
                        // onChange={onChange}
                        {...titleProps}
                        //             value: value,
                        // onChange: onChange,
                        type="text"
                        id="title"
                        name="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Select an option
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...categoryProps}
                    >
                        {categories.map((category) => (
                            <option key={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your message
                    </label>
                    <textarea
                        {...descriptionProps}
                        id="message"
                        rows="4"
                        name="message"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                    ></textarea>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="image"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your image
                    </label>
                    <input
                        {...imageProps}
                        type="text"
                        id="image"
                        name="image"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your price
                    </label>
                    <input
                        {...priceProps}
                        type="number"
                        id="price"
                        name="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="ratting"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your ratting
                    </label>
                    <input
                        {...rattingProps}
                        type="number"
                        min="0"
                        max="5"
                        id="ratting"
                        name="ratting"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <div className="mb-5">
                    <button
                        // onClick={handleSubmit}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Save Post
                    </button>
                </div>
            </Form>
        </div>
    );
}
