import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ categories }) {
    return (
        <div className="col-span-3 bg-white p-3">
            <h2 className="text-3xl font-bold mb-5">Product Categories</h2>
            <ul className="sticky top-3">
                {categories.map((category) => (
                    <li key={category.id}>
                        <NavLink
                            className={({ isActive, isPending }) => {
                                return isActive
                                    ? "block p-2 bg-green-600 text-white rounded mb-2 capitalize"
                                    : isPending
                                    ? "block p-2 bg-red-200 hover:bg-red-600 hover:text-white rounded mb-2 capitalize"
                                    : "block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize";

                                // block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 capitalize
                            }}
                            to={`/category/${category.title}`}
                        >
                            {category.title}
                        </NavLink>
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
