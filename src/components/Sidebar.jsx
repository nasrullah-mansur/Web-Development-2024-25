import { Link } from "react-router-dom";

export default function Sidebar({ categories }) {
    return (
        <div className="col-span-3 bg-white p-3">
            <h2 className="text-3xl font-bold mb-5">Product Categories</h2>
            <ul className="sticky top-3">
                {categories.map((category) => (
                    <li key={category.id}>
                        <a
                            className="block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize"
                            href="#"
                        >
                            {category.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-12 text-center">
                <Link to="/" className="py-2 px-4 bg-green-500 text-white mr-2">
                    Go Home
                </Link>
                <Link to="/create" className="py-2 px-4 bg-red-500 text-white">
                    Create Product
                </Link>
            </div>
        </div>
    );
}
